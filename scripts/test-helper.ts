import pth from 'path';
import { globby } from 'globby';
import fs from 'fs/promises';

export interface SourceStructureNode {
  path: string;
  dirname: string;
  basename: string;
  /** Whether is an index.ts file. */
  isIndex: boolean;
  /** The name when the module being relatively imported */
  related: string;
  /** Child modules. */
  children: SourceStructureNode[];
  /** The correct content of the file. */
  expected: string[];
  /** The actual content of the file. */
  received: string[];
}

export const checkReExporting = async (options: { __dirname: string }) => {
  const { __dirname } = options;

  // All source code files
  const srcFiles = await globby(
    [
      '**/*.ts',
      '**/*.tsx',
      '!**/.*.ts',
      '!**/*.test.ts',
      '!**/*.spec.ts',
      '!**/*.test.tsx',
      '!**/*.spec.tsx',
    ],
    {
      cwd: __dirname,
    },
  );

  // Build basic info.
  const list = srcFiles.map(path => {
    const dirname = pth.dirname(path);
    const basename = pth.basename(path);
    const isIndex = basename.startsWith('index');
    const related = isIndex
      ? pth.basename(dirname)
      : pth.basename(basename, pth.extname(path));
    const node: SourceStructureNode = {
      path,
      dirname,
      basename,
      isIndex,
      related,
      children: [],
      expected: [],
      received: [],
    };
    return node;
  });

  // Build parent-child structure.
  list.forEach(node => {
    const { dirname, isIndex } = node;
    if (isIndex && dirname === '.') {
      return;
    }
    const parentDirname = isIndex ? pth.dirname(dirname) : dirname;
    list
      .find(n => n.isIndex && n.dirname === parentDirname)
      ?.children.push(node);
  });

  // Sort children.
  list.forEach(node => {
    const { children } = node;
    children.sort((a, b) => a.related.localeCompare(b.related));
  });

  await Promise.all(
    list.map(async (node): Promise<void> => {
      const { path, isIndex, children } = node;
      if (!isIndex) {
        return;
      }

      const comment = `// ${path}`;

      node.expected = [
        comment,
        ...children.map(c => `export * from './${c.related}';`),
      ];

      node.received = [
        comment,
        ...(
          await fs.readFile(pth.resolve(__dirname, path), {
            encoding: 'utf-8',
          })
        )
          .split(/[\n\r]+/)
          .filter(l => l)
          .sort((a, b) => a.localeCompare(b)),
      ];
    }),
  );

  const walk = (node: SourceStructureNode, level: number, lines: string[]) => {
    const { related, children } = node;
    const content = `${'  '.repeat(level)}${related}`;
    lines.push(content);
    if (children.length) {
      children.forEach(c => walk(c, level + 1, lines));
    }
  };
  const lines: string[] = [];
  const root = list.find(n => n.dirname === '.')!;
  walk(root, 0, lines);
  const map = lines.join('\n');

  return { list, map };
};
