import React, { Fragment } from 'react';
import { Container } from './AppStyles';
import Header from './header/HeaderComponent';
import Search from './search/SearchComponent';
import List from './list/ListComponent';

const AppComponent = () => (
  <Fragment>
    <Header />
    <Container>
      <Search />
      <List />
    </Container>
  </Fragment>
);

export default AppComponent;
