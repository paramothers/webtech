var data = require("../store/restData");
module.exports = {

    products: () => data.products,
    suppliers: () => data.suppliers
}