import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.scss';
import logo from '../../images/logo.svg';
import menu from '../../images/icon-menu.svg';
import ava from '../../images/image-avatar.png';
import del from '../../images/icon-delete.svg';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
import { uiActions} from '../../store/uiSlice'

const Header = () => {
  const showCart = useSelector(state => state.ui.showCart)
  const {total} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const product = React.useContext(ProductContext);
  const { cart } = React.useContext(CartContext);



  React.useEffect(() => {
    console.log(total);
  }, [total]);

  const cartClickHandler = () => {
    dispatch(uiActions.toggleIsLoggedin())
  };

  let content = !cart.length ? (
    <p className={classes.cart__empty}>Your cart is empty.</p>
  ) : (
    <div className={classes.cart__product}>
      <img
        src={product.images.bigPic[0]}
        alt=""
        className={classes.cart__productPic}
      />
      <div className={classes.cart__prodSummary}>
        <h3 className={classes.cart__prodTitle}>{product.title}</h3>
        <p className={classes.cart__prodTotal}>
          ${product.price}.00 x 3 <span>$375.00</span>
        </p>
      </div>
      <img src={del} alt="" />
    </div>
  );

  return (
    <header className={classes.header}>
      <img src={menu} alt="Menu" className={classes.header__menu} />
      <div className={classes.header__logoContainer}>
        <img src={logo} alt="Site logo" className={classes.header__logo} />
      </div>
      <div className={classes.header__cartContainer} onClick={cartClickHandler}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="##1E1D22"
            fillRule="nonzero"
          />
        </svg>
        <div className={classes.header__cartBadge} style={{'display': total ? 'block' : 'none'}}>{total}</div>
      </div>
      <div className={classes.header__avaContainer}>
        <img src={ava} alt="avatar" className={classes.header__ava} />
      </div>
      <div
        className={classes.cart}
        style={{ display: showCart ? 'grid' : 'none' }}
      >
        <h3 className={classes.cart__headline}>Cart</h3>
        <div className={classes.cart__content}>
          {content}

          <button className={classes.cart__checkout}>Checkout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
