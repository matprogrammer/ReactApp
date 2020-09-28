import React, { useEffect, useState } from 'react';
import connect from './connect';

import TopSearch from '../../components/topSearch';
import ProductDetails from '../../components/productDetails';
import ProductShimmer from '../../components/productShimmer'
import Breadcrumb from '../../components/breadcrumb';

function Details({ getProduct, productLoading }) {

  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const result = await getProduct();
      if (result) {
        setProduct(result);
        setLoading(productLoading);
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

export default connect(Details);
