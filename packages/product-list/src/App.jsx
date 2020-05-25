import React from 'react';

import GlobalStyle from 'design_system/GlobalStyle';
import ProductsList from './components/ProductsList/ProductsList';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ProductsList />
    </>
  );
};

export default App;
