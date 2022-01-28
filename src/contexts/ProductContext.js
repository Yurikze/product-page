import { createContext } from 'react';
import bigPic1 from '../images/image-product-1.jpg'
import bigPic2 from '../images/image-product-2.jpg'
import bigPic3 from '../images/image-product-3.jpg'
import bigPic4 from '../images/image-product-4.jpg'

export const ProductContext = createContext();

export const product = {
  id: 1,
  title: 'Fall Limited Edition Sneakers',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipiscivoluptatum quasi quae qui sint totam, sed eos consequatur nobis quo.',
  images: {
    bigPic: [
      bigPic1,
      bigPic2,
      bigPic3,
      bigPic4,
    ],
  },
};
