import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopSearch from '../../components/topSearch';
import ProductDetails from '../../components/productDetails';
import ProductShimmer from '../../components/productShimmer'
import Breadcrumb from '../../components/breadcrumb';

function Details() {

  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const parts = window.location.href.split('/');
      const id = parts.pop() || parts.pop();
      const result = await axios(`/api/items/${id}`)
      if (result.data) {
        setProduct(result.data.products);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="body-container">
      <TopSearch />
      { product?.categories && <Breadcrumb categories={product.categories} />}
      <div className="product-container">
        {
          !isLoading && product?.item?.length > 0 ? (
            <ProductDetails key={product.item.id} product={product.item} />
          ) : <ProductShimmer/>
        }
      </div>
    </div>
  );
}

export default Details;
