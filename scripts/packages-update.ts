import fetch from 'node-fetch';
import pkg from '../package.json';

const update = async () => {
  let infos = await Promise.all(
    Object.entries(pkg.devDependencies).map(async ([name, oldVersion]) => {
      const res = await fetch(`https://registry.npmjs.org/${name}`);
      const data: any = await res.json();
      return {
        name,
        oldVersion,
        newVersion: `^${data['dist-tags'].latest}`,
      };
    }),
  );

  infos = infos.filter(
    ({ name, oldVersion, newVersion }) => oldVersion !== newVersion,
  );

  console.table(infos);

  const args = infos
    .map(({ name, newVersion }) => `${name}@${newVersion}`)
    .join(' ');

  console.log(`pnpm add -D -w ${args}`);
};

update();
