import React from 'react';
import classes from './App.module.scss';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { ProductContext, product } from './contexts/ProductContext';

function App() {
  return (
    <div className={classes.page}>
      <ProductContext.Provider value={product}>
        <Header />
        <main className="main">
          <Gallery />
          <ProductInfo />
        </main>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
