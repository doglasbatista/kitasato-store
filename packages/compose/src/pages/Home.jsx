import React from 'react';

const ProductList = React.lazy(() => import('product_list/App'));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </React.Suspense>
    </div>
  )
};

export default App;


// import ProductList from 'product-list';

// const App = () => {
//   return (
//     <div>
//       <ProductList />
//     </div>
//   )
// };

// export default App;
