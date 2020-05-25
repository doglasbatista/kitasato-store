import React, {useState, useEffect} from 'react';
import {map, uniq, append, concat, reject} from 'ramda';

import useGetMiniCartData from '../../hooks/useGetMiniCartData';

import {
  MiniCartList,
  MiniCartItem,
  ItemName,
  ItemPrice,
  RemoveItemButton,
  Title,
  Container,
} from './MiniCart.style';

const MiniCart = () => {
  const {loading, miniCartData} = useGetMiniCartData();
  const [showList, setShowList] = useState(false);
  const [productList, setProductList] = useState([]);

  const formatedPrice = price => `R$ ${price / 100}`.replace('.', ',');

  useEffect(() => {
    setProductList(uniq(concat(miniCartData, productList)));
  }, [miniCartData]);

  const addToCart = event => {
    setProductList(uniq(append(event.detail, productList)));
  };

  const removeItemFromCart = product => {
    setProductList(
      reject(productItem => productItem.id === product.id, productList),
    );

    const removeItemFromCartEvent = new CustomEvent('removeItemFromCart', {
      detail: product,
    });

    window.dispatchEvent(removeItemFromCartEvent);
  };

  const productListSize = productList.length;

  const miniCartTitle =
    productListSize !== 0
      ? `${productListSize} ${
          productListSize === 1 ? 'item' : 'itens'
        } no carrinho`
      : 'Carrinho Vazio';

  useEffect(() => {
    window.addEventListener('addToCart', addToCart);
    return () => window.removeEventListener('addToCart', addToCart);
  });

  return (
    <Container
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Title>{miniCartTitle}</Title>
          {true && (
            <MiniCartList>
              {map(
                product => (
                  <MiniCartItem key={product.id}>
                    <ItemName>{product.title}</ItemName>
                    <div>
                      <ItemPrice>{formatedPrice(product.price)}</ItemPrice>
                      <RemoveItemButton
                        onClick={() => removeItemFromCart(product)}>
                        x
                      </RemoveItemButton>
                    </div>
                  </MiniCartItem>
                ),
                productList,
              )}
            </MiniCartList>
          )}
        </>
      )}
    </Container>
  );
};

export default MiniCart;
