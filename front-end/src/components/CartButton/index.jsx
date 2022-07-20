import React, { useState } from 'react';
import styles from './index.module.css';

function CartButton() {
  const [price] = useState(0);
  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      className={ styles.cartButton }
    >
      {`Ver Carrinho: R$ ${price}`}
    </button>
  );
}

export default CartButton;
