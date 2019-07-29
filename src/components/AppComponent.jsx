import React, { Fragment } from 'react';
import { Container } from './AppStyles';
import Header from './header/HeaderComponent';
import Search from './search/SearchComponent';

const AppComponent = () => (
  <Fragment>
    <Header />
    <Container>
      <Search />
    </Container>
  </Fragment>
);

export default AppComponent;
