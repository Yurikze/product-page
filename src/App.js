import React from 'react';
import classes from './App.module.scss';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';

const products = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    images: {}
  }
]

function App() {




  return (
    <div className={classes.page}>
      <Header />
      <main className="main">
        <Gallery />
      </main>
    </div>
  );
}

export default App;
