import React from 'react';
import shippingImage from '../assets/ic_shipping.png';
import {
  Link
} from "react-router-dom";
import '../styles/itemResult.scss';

function ResultItem(item) {
  const { title, free_shipping, picture, price, id } = item.item;
  return (
    <Link to={{pathname: `/items/${id}`}}>
      <div className="item-container">
        { picture && <img className="item-image" src={picture} alt="shipping" />}
        <div className="item-info ">
          { price.amount && (
            <span className="item-price">
              $ {price.amount}{ free_shipping && <img className="item-shipping" src={shippingImage} alt="shipping" />}
            </span>
          ) }
          { title && <span className="item-title">{title}</span> }
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
