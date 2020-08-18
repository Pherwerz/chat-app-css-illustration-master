import React from 'react';
import classes from './Layout.module.scss';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Layout = () => (
  <div className={classes.Layout}>
    <Main />
    <Footer />
  </div>
);

export default Layout;
