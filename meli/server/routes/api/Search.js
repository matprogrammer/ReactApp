const axios = require('axios')
const { removeSpecialChars, mapper } = require('../../../utils/utils');
const path = 'https://api.mercadolibre.com/sites/MLA/search?';
const categoriesPath = 'https://api.mercadolibre.com'
var products = {
    "author": {
        "name": "Mauro",
        "lastname": "Aguiar"
    },
    "categories": [],
    "items": []
};

module.exports = (app) => {
    app.get('/api/items', async (req, res) => {
        let { q } = req.query;
        q = removeSpecialChars(q);
        const url = `${path}q=${q}&limit=4`;
        products.items = [];
        products.categories = [];
        try {
            const result = await axios.get(url);
            if (result.data.results) {
                const categoryId = result.data.results[0].category_id;
                result.data.results.map(item => {
                    products.items.push(mapper(item, null))
                });
                const getCategoriesUrl = `${categoriesPath}/categories/${categoryId}`;
                var categories = await axios.get(getCategoriesUrl);
                if (categories.data.path_from_root) {
                    categories.data.path_from_root.map(c => {
                        products.categories.push(c.name);
                    })
                }
            }
            res.send({ products });
        }
        catch(err) {
            console.log('Error products search: ', err);
            res.redirect('/error');
        };
    })
}
