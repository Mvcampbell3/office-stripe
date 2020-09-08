import React, { useState } from 'react';
import './store.css'
import Header from '../../components/Header';

const Store = (props) => {
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
        {props.loading ? <div className="loading">Loading</div> : <div className='products-holder'></div>}
      </div>

    </div>

  );
}

export default Store;