import classes from './Gallery.module.scss';
import productImg from '../../images/image-product-1.jpg';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';

const Gallery = () => {

  

  return (
    <div className={classes.gallery}>
      <img src={productImg} alt="pic1" className={classes.gallery__bigPic} />
      <button className={`${classes.gallery__btn} ${classes.gallery__btn_pos_prev}`}>
        <img src={prev} alt="previous" className={classes.gallery__btnIcon} />
      </button>
      <button className={`${classes.gallery__btn} ${classes.gallery__btn_pos_next}`}>
        <img src={next} alt="next" className={classes.gallery__btnIcon} />
      </button>
    </div>
  );
};

export default Gallery;
