import React, {useState, useEffect} from 'react';
import {reject, isEmpty, map, uniq, concat, includes} from 'ramda';

import useGetProductsList from '../../hooks/useGetProductsList';

import Productsitem from '../ProductItem/ProductItem';

const ProductsList = () => {
  const {loading, productsList} = useGetProductsList();
  const [productsInTheMiniCart, setProductsInTheMiniCart] = useState([]);

  const removeItemFromCart = event => {
    setProductsInTheMiniCart(
      reject(
        productItem => productItem.id === event.detail.id,
        productsInTheMiniCart,
      ),
    );
  };

  useEffect(() => {
    window.addEventListener('removeItemFromCart', removeItemFromCart);
    return () =>
      window.removeEventListener('removeItemFromCart', removeItemFromCart);
  });

  const updateMiniCartData = event => {
    setProductsInTheMiniCart(uniq(concat(event.detail, productsInTheMiniCart)));
  };

  useEffect(() => {
    window.addEventListener('updateMiniCartData', updateMiniCartData);
    return () =>
      window.removeEventListener('updateMiniCartData', updateMiniCartData);
  });

  const isProductAddedToCart = product =>
    includes(product, productsInTheMiniCart);

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
          product => (
            <Productsitem
              key={product.id}
              product={product}
              addedToCart={isProductAddedToCart(product)}
            />
          ),
          productsList,
        )}
    </div>
  );
};

export default ProductsList;
