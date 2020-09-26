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
    app.get('/items/:id', (req, res) => {
        const baseUrl = 'https://api.mercadolibre.com/items/';
        let id = req.params.id;
        let apiUrl = baseUrl + id;
        fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            if (response) {
                const item = response;
                console.log(item)
                const url = `${apiUrl}/description`
                fetch(url).then(res => res.json())
                .then(response => {
                    if (response) {
                        products.items.push(mapper(item, response.plain_text))
                    }
                    res.send({ products });
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.redirect('/error');
        });
    })
}

