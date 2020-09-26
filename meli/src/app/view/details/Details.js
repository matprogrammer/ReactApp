import React, { useEffect, useState } from 'react';
import TopSearch from '../../components/topSearch';
import ProductDetails from '../../components/productDetails';

function Details() {

  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const parts = window.location.href.split('/');
  const id = parts.pop() || parts.pop();

  useEffect(() => {
    setLoading(true);
    fetch(`/items/${id}`)
		.then(res => res.json())
		.then(res => {
      setProduct(res.products.items);
      setLoading(false);
		})
		.catch(err => {
		   console.log(err);
		})
  }, []);

  return (
    <div className="body-container">
      <TopSearch />
      <div className="product-container">
        {
          !isLoading && product.length > 0 &&
            <ProductDetails key={product.id} product={product} />
        }
      </div>
    </div>
  );
}

export default Details;
