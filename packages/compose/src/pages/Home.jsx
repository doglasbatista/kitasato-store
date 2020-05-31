import React from 'react';

const ProductList = React.lazy(() => import('product_list/App'));
const MiniCart = React.lazy(() => import('mini_cart/App'));

const App = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gridGap: '50px',
      }}>
      <React.Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </React.Suspense>
      <React.Suspense fallback={<p>Loading MiniCart...</p>}>
        <MiniCart />
      </React.Suspense>
    </div>
  )
};

export default App;
