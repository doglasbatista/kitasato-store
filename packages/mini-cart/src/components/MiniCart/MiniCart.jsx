import React, {useState} from 'react';

import {
  MiniCartList,
  MiniCartItem,
  ItemName,
  ItemPrice,
  Title,
} from './MiniCart.style';

const MiniCart = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <Title
        onMouseEnter={() => setShowList(true)}
        onMouseLeave={() => setShowList(false)}>
        2 itens do carrinho
      </Title>
      {showList && (
        <MiniCartList>
          <MiniCartItem>
            <ItemName>Vans ultrarange</ItemName>
            <ItemPrice>R$ 559,69</ItemPrice>
          </MiniCartItem>
          <MiniCartItem>
            <ItemName>All Star</ItemName>
            <ItemPrice>R$ 289,89</ItemPrice>
          </MiniCartItem>
        </MiniCartList>
      )}
    </div>
  );
};

export default MiniCart;
