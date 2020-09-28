import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopSearch from '../../components/topSearch';
import ResultItem from '../../components/resultItem';
import Shimmer from '../../components/shimmer';
import Breadcrumb from '../../components/breadcrumb';
import NoResults from '../../components/noResults';

function SearchResult() {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const params = new URLSearchParams(window.location.search);
      setLoading(true);
      const result = await axios(`/api/items?q=${params}`)
      if (result.data) {
        setResults(result.data.products);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="body-container">
        <TopSearch />
        { results?.categories && <Breadcrumb categories={results.categories} />}
        <div className="items-container">
          {
            !isLoading ? (
              results?.items?.length > 0 ?
              results.items?.map(i => (
                  <ResultItem key={i.id} item={i} />
                )) :
                <NoResults />
            ) : <Shimmer/>
          }
        </div>
    </div>
  );
}

export default SearchResult;
