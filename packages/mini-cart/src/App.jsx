import React from 'react';

// import GlobalStyle from 'design_system/GlobalStyle';

import MiniCart from './components/MiniCart/MiniCart';

const App = () => {
  return (
    <>
      {/* <React.Suspense fallback={<p>Loading Card...</p>}>
        <GlobalStyle />
      </React.Suspense> */}
      <MiniCart />
    </>
  );
};

export default App;
