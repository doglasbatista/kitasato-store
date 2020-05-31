import React, {useState} from 'react';

// import Card from 'design_system/Card';
// import CardTitle from 'design_system/CardTitle';
// import Image from 'design_system/Image';
// import Button from 'design_system/Button';

const ProductItem = ({addedToCart, product}) => {
  const formatedPrice = price => `R$ ${price / 100}`.replace('.', ',');

  const addToCart = product => {
    const addToCartEvent = new CustomEvent('addToCart', {detail: product});

    window.dispatchEvent(addToCartEvent);
  };

  return (
    <div key={product.id}>
      <img src={product.imagePath} />
      <div>{product.title}</div>
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
      <button action={() => addToCart(product)} disabled={addedToCart}>
        {addedToCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
      </button>
    </div>
  );
};

export default ProductItem;
