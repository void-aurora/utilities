import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { routes, linksMap } from './routes';

export function App() {
  const location = useLocation();
  console.log(location.pathname);

  const routeComponent = routes[location.pathname];

  return (
    <div id="app">
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        {linksMap[''].map(linkProps => (
          <Link key={linkProps.to as string} {...linkProps}>
            {linkProps.children}
          </Link>
        ))}
      </div>

      <h1>{routeComponent.component?.displayName}</h1>

      <Switch>
        {Object.entries(routes).map(([path, prop]) => (
          <Route key={path} {...prop} />
        ))}
      </Switch>
    </div>
  );
}
