function removeSpecialChars(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getQueryParam(query) {
    var param = query.split("=")[1];
    return removeSpecialChars(param);
}

function mapper (item, description) {
    var { integer, decimal} = splitFloat(item.price);
    const result = {
        "id": item.id,
        "title": item.title,
        "price": {
            "currency": item.currency_id,
            "amount": integer,
            "decimals": decimal
        },
        "picture": item.thumbnail,
        "condition": item.condition,
        "free_shipping": item.shipping ? item.shipping.free_shipping : false,
        "description": description,
        "sold_quantity": item.sold_quantity
    }
    return result;
}

function splitFloat (price) {
    price = (price + "").split(".");
    return {
        integer: price[0],
        decimal: price[1]
     }
}

module.exports = {
    getQueryParam,
    mapper
};
