import React, {useState} from 'react';

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

  return (
    <Container
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}>
      <Title>2 itens do carrinho</Title>
      {showList && (
        <MiniCartList>
          <MiniCartItem>
            <ItemName>Vans ultrarange</ItemName>
            <div>
              <ItemPrice>R$ 559,69</ItemPrice>
              <RemoveItemButton>x</RemoveItemButton>
            </div>
          </MiniCartItem>
          <MiniCartItem>
            <ItemName>All Star</ItemName>
            <div>
              <ItemPrice>R$ 289,89</ItemPrice>
              <RemoveItemButton>x</RemoveItemButton>
            </div>
          </MiniCartItem>
        </MiniCartList>
      )}
    </Container>
  );
};

export default MiniCart;
