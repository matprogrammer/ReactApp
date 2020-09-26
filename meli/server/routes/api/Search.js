const fetch = require('node-fetch');
const mapper = require('../../../utils/jsonMapper');

var products = {
    "author": {
        "name": "Mauro",
        "lastname": "Aguiar"
    },
    "categories": [],
    "items": []
};


module.exports = (app) => {
    app.get('/items', (req, res) => {
        const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';
        let { search } = req.query;
        let apiUrl = baseUrl + search;
        fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            if (response.results.length) {
                response.results.slice(0, 4).map(item => {
                    products.items.push(mapper(item))
                })
                console.log(products.items.length);
            }
            res.send({ products });
        })
        .catch(err => {
            console.log(err)
            res.redirect('/error');
        });
    })
}
