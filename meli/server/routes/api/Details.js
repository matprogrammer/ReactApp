const axios = require('axios')
const { mapper } = require('../../../utils/utils');
const path = 'https://api.mercadolibre.com'

var products = {
    "author": {
        "name": "Mauro",
        "lastname": "Aguiar"
    },
    "categories": [],
    "item": []
};

module.exports = (app) => {
    app.get('/api/items/:id', async (req, res) => {
        let id = req.params.id;
        const getProductUrl = `${path}/items/${id}`;
        const getDescriptionUrl = `${path}/items/${id}/description`;
        let productDescription = "";
        products.item = [];
        products.categories = [];
        try {
            const result = await axios.get(getProductUrl);
            if (result.data) {
                try {
                    if (result.data.category_id) {
                        const getCategoriesUrl = `${path}/categories/${result.data.category_id}`;
                        const categories = await axios.get(getCategoriesUrl);
                        if (categories.data.path_from_root) {
                            categories.data.path_from_root.map(c => {
                                products.categories.push(c.name);
                            })
                        }
                    }
                } catch (err) {
                    console.log('Error get categories: ', err);
                };

                try {
                    const description = await axios.get(getDescriptionUrl);
                    if (description.data.plain_text) {
                        productDescription = description.data.plain_text;
                    }
                } catch (err) {
                    console.log('Error get description: ', err);
                };
                products.item.push(mapper(result.data, productDescription));
            }
            res.send({ products });
        }
        catch(err) {
            console.log('Error product details: ', err);
            res.redirect('/error');
        };
    })
}
