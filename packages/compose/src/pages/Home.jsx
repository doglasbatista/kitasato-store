import React from 'react';

const GlobalStyle = React.lazy(() => import('design_system/GlobalStyle'));
const ProductList = React.lazy(() => import('product_list/App'));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<p>Loading Card...</p>}>
        <GlobalStyle />
      </React.Suspense>
      <React.Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </React.Suspense>
    </div>
  )
};

export default App;
