import React from 'react';

import '../styles/productDetails.scss';

function ProductDetails({product}) {
  const { title, picture, price, condition,  description, sold_quantity } = product[0];
  return (
    <div>
      <div className="product-details">
        <img className="product-image" src={picture} alt={title} />
        <div className="product-info">
          <span className=""><span className="product-condition">{condition}</span><span className="product-sold">{sold_quantity} Vendidos</span></span>
          <span className="product-title">{title}</span>
          <span className="product-price">$ {price?.amount}<span className="product-decimals">{price?.decimals}</span></span>
          <span className="product-button">Comprar</span>
        </div>
      </div>
      <div className="product-description">
        <span className="description-title">Descripción del producto</span>
        { description }
      </div>
    </div>

  );
}

export default ProductDetails;
