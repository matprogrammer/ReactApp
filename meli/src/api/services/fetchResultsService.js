import { resultUrl } from '../urls/urlServices';
import axios from 'axios';

import { mapper, newProductJSON } from '../../app/utils/jsonMapper';

async function fetchResultsService(params) {
    try {
        const res = await axios.get(`${resultUrl}${params}`);

        if (res?.data?.results) {
            res.data.results.map(item => {
                newProductJSON.items.push(mapper(item))
            })
            return newProductJSON;
        }

        return [];

    } catch (error) {
        console.log(error);
    }
}

export default fetchResultsService;
