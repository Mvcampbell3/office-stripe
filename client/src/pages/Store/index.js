import React, { useEffect } from 'react';
import './store.css'
import Header from '../../components/Header';
import Product from '../../components/Product';

const Store = (props) => {
  useEffect(
    () => {
      window.scrollTo(0, 0)
    }, []
  )
  return (
    <div className="container">
      <Header user={props.user} />
      <div className="main-store">
        <div className="store-nav">
          <div className={props.display_store === 'all' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("all")}>All</div>
          <div className={props.display_store === 'machines' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("machines")}>Machines</div>
          <div className={props.display_store === 'flair' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("flair")}>Flair</div>
          <div className={props.display_store === 'movies' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("movies")}>Movies</div>
          <div className={props.display_store === 'cars' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("cars")}>Cars</div>
          <div className={props.display_store === 'games' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("games")}>Games</div>
        </div>
        {props.loading ? <div className="loading">Loading</div> :
          <div className='products-holder'>
            {props.products.map((product, i) => {
              return <Product product={product} key={i} />
            })}
          </div>}
      </div>

    </div>

  );
}

export default Store;