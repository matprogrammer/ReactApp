import React, { useEffect, useState } from 'react';

import TopSearch from '../../components/topSearch';
import ResultItem from '../../components/resultItem';
import Shimmer from '../../components/shimmer';

function SearchResult({ fetchResultsService }) {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    setLoading(true);
    fetch(`/items?search=${params}`)
		.then(res => res.json())
		.then(res => {
      setResults(res.products.items);
      setLoading(false);
		})
		.catch(err => {
		   console.log(err);
		})
  }, []);

  return (
    <div className="body-container">
        <TopSearch />
        <div className="items-container ">
          {
            !isLoading ? (
              results.length > 0 ?
                results?.map(i => (
                  <ResultItem key={i.id} item={i} />
                )) :
                <span>SIN RESULTADOS</span>
            ) : <Shimmer/>
          }
        </div>
    </div>
  );
}

export default SearchResult;
