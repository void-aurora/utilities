import { FC } from 'react';
import { RouteProps, LinkProps } from 'react-router-dom';

import { isFunction } from '@void-aurora/utils';

import { About, Home } from './views';
import * as color from './demo/color';

interface RawRoutes {
  [key: string]: RawRoutes | FC;
}

const routes: Record<string, RouteProps> = {
  '/': { exact: true, path: '/', component: Home },
};
const linksMap: Record<string, LinkProps[]> = {};

function walk(raw: RawRoutes, parentPath: string) {
  Object.entries(raw).forEach(([key, subRawOrComp]) => {
    const path = `${parentPath}/${key.toLowerCase()}`;
    if (isFunction(subRawOrComp)) {
      routes[path] = {
        exact: true,
        path,
        component: subRawOrComp,
      };
      const links = linksMap[parentPath] || (linksMap[parentPath] = []);
      links.push({
        to: path,
        children: subRawOrComp.displayName,
      });
      return;
    }
    walk(subRawOrComp, path);
  });
}

walk(
  {
    Home,
    About,
    color,
  },
  '',
);

export { routes, linksMap };
