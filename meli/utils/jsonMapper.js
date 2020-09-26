function mapper (item) {
    var integer = 0;
    var decimal = 00;
    // if (item.installments != null) {
    //     var { integer, decimal} = splitFloat(item.installments.amount);
    // }
    const result = {
        "id": item.id,
        "title": item.title,
        "price": {
            "currency": item.currency_id,
            "amount": item.price,
            "decimals": decimal,
        },
        "picture": item.thumbnail,
        "condition": item.condition,
        "free_shipping": item.shipping.free_shipping
    }
    return result;
}

function splitFloat (n) {
    console.log(n);
    const regex = /(\d*)[.,]{1}(\d*)/;
    let m;
    if ((m = regex.exec(n.toString())) !== null) {
        return {
           integer:parseInt(m[1]),
           decimal:parseFloat(m[2])
        }
    }
 }

module.exports = mapper;
