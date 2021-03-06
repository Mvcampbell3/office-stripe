import React, { useState, useEffect } from 'react';
import './product.css';

const Product = (props) => {
  const [formPrice, setFormPrice] = useState('0.00');
  const { product } = props;
  const [addNumber, setAddNumber] = useState(0);
  useEffect(
    () => {
      const price = product.price.toString();
      const price_arr = price.split('');
      price_arr.splice(price_arr.length - 2, 0, ".");
      const new_price = price_arr.join('');
      setFormPrice(new_price);
    }, [product.price]
  )
  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="product-body">
          <div className="product-info">
            <div className="info-top">
              <img className='product-img' src={`./assets/images/products/${product.img_path}`} alt={product.name} />
              <h2 className="tech product-title">{product.name}</h2>

              {/* <p className="product-text tech"><span className='data tech'>{product.description}</span></p> */}

            </div>

            <div className="info-bottom">
              <div className="stats">
                <p className="product-text tech">Price: <span className='data tech'>${formPrice}</span></p>
                <p className="product-text tech">Stock: <span className='data tech'>{product.quantity}</span></p>
              </div>
              {/* <div className="action-area">
                <div className="input-product">
                  <label htmlFor='input' className="my-label tech">Add to cart</label>
                  <input type="number" className="my-number-input" value={addNumber} onChange={(e) => setAddNumber(e.target.value)} />
                  <button className="my-input-button"><i className="fas fa-plus"></i></button>
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;