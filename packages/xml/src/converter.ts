import { Parser } from 'htmlparser2';
import { DomHandler, Node, Document } from 'domhandler';
import render from 'dom-serializer';

/**
 * Converts a XML string into a DOM.
 * @param text A valid XML string.
 */
async function parse(text: string): Promise<Document> {
  return new Promise<Document>((resolve, reject) => {
    const handler = new DomHandler((error, dom) => {
      if (error) {
        return reject(error);
      }
      return resolve(dom[0].parent as Document);
    });
    const parser = new Parser(handler, { xmlMode: true });
    parser.write(text);
    parser.end();
    parser;
  });
}

function stringify(node: Node | Node[]): string {
  return render(node, { xmlMode: true });
}

export { parse, stringify };
