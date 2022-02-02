import React from 'react';
import classes from './App.module.scss';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { ProductContext, product } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext'

function App() {

  const [cart, setCart] = React.useState([])

  const handleAddToCart = prod => {
    // console.log(prod)
    // setCart(prod)
    setCart((state, props) => {
      return [
        ...state,
        prod
      ]
    })
  }

  return (
    <div className={classes.page}>
      <ProductContext.Provider value={product}>
        <CartContext.Provider value={{cart, handleAddToCart}}>
        <Header />
        <main className="main">
          <Gallery />
          <ProductInfo />
        </main>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
