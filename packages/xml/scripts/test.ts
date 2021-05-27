import pth from 'path';
import fse from 'fs-extra';
import * as XML from '../src';
import { ElementType } from 'htmlparser2';
import { getElements } from '../src';

const resolve = (...path: string[]) => pth.resolve(__dirname, ...path);

const pathAbout = resolve('About.xml');
const pathItem = resolve('Items_Artifacts.xml');

async function test() {
  await fse
    .readFile(pathAbout, 'utf-8')
    .then(text => XML.parse(text))
    .then(dom => {
      console.log(
        getElements({ tag_type: ElementType.Tag }, dom, false)[0] ===
          dom.find(n => n.type === ElementType.Tag),
      );
      return dom;
    })
    .then(dom => XML.stringify(dom))
    .then(text => fse.writeFile(`${pathAbout}.new.xml`, text));
  await fse
    .readFile(pathItem, 'utf-8')
    .then(text => XML.parse(text))
    .then(dom => XML.stringify(dom))
    .then(text => fse.writeFile(`${pathItem}.new.xml`, text));
}

test().catch(console.error);
