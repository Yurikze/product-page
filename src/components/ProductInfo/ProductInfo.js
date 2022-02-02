import React from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
import classes from './ProductInfo.module.scss';

const ProductInfo = () => {
  const product = React.useContext(ProductContext);
  const {handleAddToCart} = React.useContext(CartContext)

  const [quantity, setQuantity] = React.useState(0)

  const moreClickHandler = () => {
    setQuantity(quantity + 1)
  }

  const lessClickHandler = () => {
    quantity > 0 && setQuantity(quantity - 1)
  }

  const onAddToCart = () => {
    handleAddToCart({
      product,
      quantity
    })
  }

  return (
    <div className={classes.info}>
      <p className={classes.info__company}>Sneaker company</p>
      <h1 className={classes.info__title}>{product.title}</h1>
      <p className={classes.info__desc}>{product.description}</p>
      <div className={classes.price}>
        <div className={classes.price__cur}>
          <p className={classes.price__val}>$125.00</p>
          <p className={classes.price__discount}>50%</p>
        </div>
        <p className={classes.price__old}>$250.00</p>
      </div>
      <div className={classes.info__btns}>
        <div className={classes.quantity}>
          <button className={classes.quantity__less} onClick={lessClickHandler}></button>
          <p className={classes.quantity__total}>{quantity}</p>
          <button className={classes.quantity__more} onClick={moreClickHandler}></button>
        </div>
        <button className={classes.cartBtn} onClick={onAddToCart}>
          <span className={classes.cartBtn__icon}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
