import React from 'react';

import '../styles/productDetails.scss';

function ProductDetails(product) {
  const { title, picture, price, condition,  description, sold_quantity } = product?.product[0];
  return (
    <div>
      <div className="product-details">
        { picture && <img className="product-image" src={picture} alt={title} /> }
        <div className="product-info">
          { condition && (
            <span>
              <span className="product-condition">{condition}</span>
              <span className="product-sold">{sold_quantity} Vendidos</span>
            </span>
          )}
          { title && <span className="product-title">{title}</span> }
          { price.amount && <span className="product-price">$ {price.amount}<span className="product-decimals">{price?.decimals}</span></span> }
          <span className="product-button">Comprar</span>
        </div>
      </div>
      { description && (
        <div className="product-description">
          <span className="description-title">Descripción del producto</span>
            { description }
          </div>
      ) }
    </div>

  );
}

export default ProductDetails;
