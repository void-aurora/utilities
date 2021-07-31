import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { linksMap } from '../routes';

export const Home: FC = () => {
  return (
    <div>
      {Object.entries(linksMap).map(([parentPath, linkPropsArray]) => {
        if (!parentPath) {
          return undefined;
        }
        return (
          <section key={parentPath}>
            <h2>{parentPath}</h2>
            <p
              style={{
                display: 'flex',
                flexFlow: 'row wrap',
                gap: '8px',
              }}
            >
              {linkPropsArray.map(linkProps => (
                <Link
                  key={linkProps.to as string}
                  {...linkProps}
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#ddeaff',
                    borderRadius: '4px',
                  }}
                />
              ))}
            </p>
          </section>
        );
      })}
    </div>
  );
};

Home.displayName = 'Home';
