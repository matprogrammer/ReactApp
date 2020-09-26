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
    app.get('/api/items', (req, res) => {
        const { q } = req.query;
        console.log(req.query)
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`;
        fetch(url)
        .then(res => res.json())
        .then(response => {
            if (response.results.length) {
                response.results.map(item => {
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
