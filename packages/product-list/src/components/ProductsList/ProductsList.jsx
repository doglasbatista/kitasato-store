import React from 'react';
import {isEmpty} from 'ramda';

import useGetProductsList from '../../hooks/useGetProductsList';

import Card from 'design_system/Card';
import CardTitle from 'design_system/CardTitle';
import Image from 'design_system/Image';
import Button from 'design_system/Button';

const ProductsList = () => {
  const {loading, productsList} = useGetProductsList();

  const formatedPrice = price => `R$ ${price / 100}`.replace('.', ',');

  return (
    <div
      style={{
        margin: '16px 8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '8px',
        maxWidth: '900px',
      }}>
      {loading && <p>Loading...</p>}
      {!loading &&
        !isEmpty(productsList) &&
        productsList.map(product => (
          <Card key={product.id}>
            <CardTitle>{product.title}</CardTitle>
            <Image imagePath={product.imagePath} />
            <p
              style={{
                color: 'rgba(238, 119, 127, 0.46)',
                fontSize: '18px',
                fontWeight: '700',
                textAlign: 'right',
                margin: '16px 0',
              }}>
              {formatedPrice(product.price)}
            </p>
            <Button>Adicionar ao carrinho</Button>
          </Card>
        ))}
    </div>
  );
};

export default ProductsList;
