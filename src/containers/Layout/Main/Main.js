import React from 'react';
import Right from './right/right';
import Left from './left/left';
import styles from './Main.module.scss';

const Main = () => (
  <main className={styles.Main}>
    <Left />
    <Right />
  </main>
);

export default Main;
