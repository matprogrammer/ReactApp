import React, { useEffect } from 'react';
import TopSearch from '../../components/topSearch';

import fetchResultsService from '../../../api/services/fetchResultsService';

function SearchResult() {

  const params = new URLSearchParams(window.location.search)
  useEffect(() => {
    fetchResultsService(params.get('search'));
  }, []);

  return (
    <div>
        <TopSearch />
    </div>
  );
}

export default SearchResult;
