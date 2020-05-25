import React, {useState, useEffect} from 'react';
import {map, uniq, append} from 'ramda';

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
  const [showList, setShowList] = useState(false);
  const [productList, setProductList] = useState([]);

  const formatedPrice = price => `R$ ${price / 100}`.replace('.', ',');

  const addToCart = event => {
    setProductList(uniq(append(event.detail, productList)));
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
      <Title>{miniCartTitle}</Title>
      {true && (
        <MiniCartList>
          {map(
            product => (
              <MiniCartItem key={product.id}>
                <ItemName>{product.title}</ItemName>
                <div>
                  <ItemPrice>{formatedPrice(product.price)}</ItemPrice>
                  <RemoveItemButton>x</RemoveItemButton>
                </div>
              </MiniCartItem>
            ),
            productList,
          )}
        </MiniCartList>
      )}
    </Container>
  );
};

export default MiniCart;
