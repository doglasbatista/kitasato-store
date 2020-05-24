import React from 'react';
import {isEmpty} from 'ramda';

import useGetProductsList from '../../hooks/useGetProductsList';

import Card from 'design_system/Card';

const ProductsList = () => {
  const {loading, productsList} = useGetProductsList();

  const formatedPrice = price => `R$ ${price / 100}`;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        !isEmpty(productsList) &&
        productsList.map(product => (
          <Card key={product.id}>
            {product.title} - {formatedPrice(product.price)}
          </Card>
        ))}
    </div>
  );
};

export default ProductsList;
