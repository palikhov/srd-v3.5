import classNames from 'classnames';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import documentGroups from '../../../data/document-groups.json';
import SearchForm from '../SearchForm';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={classNames(styles.app, 'layout')}>
      <Head>
        <title>SRD3.5</title>
      </Head>
      <div className={classNames(styles.appwrap, 'layout__wrap')}>
        <h1>Revised (v.3.5) System Reference Document</h1>
        <div className={styles.searchForm}>
          <SearchForm />
        </div>
        <div className={styles.tableOfContents}>
          {documentGroups.map(group => {
            return (
              <div key={group.groupName}>
                <h3>{group.groupName}</h3>
                <ul>
                  {group.pages.map(page => (
                    <li key={page.href}>
                      <Link href={`/docs/${page.href.split('.')[0]}`}>{page.textContent}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;