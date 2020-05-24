import React from 'react';
import {isEmpty} from 'ramda';

import useGetProductsList from '../../hooks/useGetProductsList';

const ProductsList = () => {
  const {loading, productsList} = useGetProductsList();

  const formatedPrice = price => `R$ ${price / 100}`;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        !isEmpty(productsList) &&
        productsList.map(product => (
          <div key={product.id}>{product.title} - {formatedPrice(product.price)}</div>
        ))}
    </div>
  );
};

export default ProductsList;
