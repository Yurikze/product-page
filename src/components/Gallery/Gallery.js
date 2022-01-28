import React, { useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import classes from './Gallery.module.scss';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';

const Gallery = () => {
  const product = React.useContext(ProductContext);
  const [curImg, setCurImg] = useState(0);
  const nextClickHandler = (e) => {
    setCurImg(curImg < product.images.bigPic.length - 1 ? curImg + 1 : 0);
  };

  const prevClickHandler = () => {
    setCurImg(curImg > 0 ? curImg - 1 : product.images.bigPic.length - 1);
  };

  console.log(product.images.bigPic.length);

  return (
    <div className={classes.gallery}>
      <img
        src={product.images.bigPic[curImg]}
        alt="pic1"
        className={classes.gallery__bigPic}
      />
      <button
        onClick={prevClickHandler}
        className={`${classes.gallery__btn} ${classes.gallery__btn_pos_prev}`}
      >
        <img src={prev} alt="previous" className={classes.gallery__btnIcon} />
      </button>
      <button
        onClick={nextClickHandler}
        className={`${classes.gallery__btn} ${classes.gallery__btn_pos_next}`}
      >
        <img src={next} alt="next" className={classes.gallery__btnIcon} />
      </button>
    </div>
  );
};

export default Gallery;
