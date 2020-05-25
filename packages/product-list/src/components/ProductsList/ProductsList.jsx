import React from 'react';
import {isEmpty, map} from 'ramda';

import useGetProductsList from '../../hooks/useGetProductsList';

import Productsitem from '../ProductItem/ProductItem';

const ProductsList = () => {
  const {loading, productsList} = useGetProductsList();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '8px',
      }}>
      {loading && <p>Loading...</p>}
      {!loading &&
        !isEmpty(productsList) &&
        map(
          product => <Productsitem key={product.id} product={product} />,
          productsList,
        )}
    </div>
  );
};

export default ProductsList;
