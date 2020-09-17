import React, { useEffect } from 'react';
import './store.css'
import Header from '../../components/Header';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
import ErrorDisplay from '../../components/ErrorDisplay';

const Store = (props) => {

  const { getAllProducts } = props;

  useEffect(
    () => {
      window.scrollTo(0, 0)
      getAllProducts();
    }, [getAllProducts]
  );

  return (
    <div className="container-store">
      <Header user={props.user} />
      {props.error ? <ErrorDisplay error={props.error} messages={props.error_messages} clearErrors={props.clearErrors} /> : null}
      <div className="main-store">
        <div className="store-nav">
          <div className={props.display_store === 'all' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("all")}>All</div>
          <div className={props.display_store === 'rocket' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("rocket")}>Rockets</div>
          <div className={props.display_store === 'payload' ? 'store-nav-item tech selected' : 'store-nav-item tech'} onClick={() => props.setDisplayStore("payload")}>Payloads</div>
        </div>
        {props.loading ? <Loading /> :
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