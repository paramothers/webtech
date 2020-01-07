var faker = require("faker");
var data = [];
var categories = ["Watersports", "Soccer", "Chess", "Running"]
faker.seed(100);

for (let i = 0; i <= 503; i++) {

  var category = faker.helpers.randomize(categories);
  data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price())
  });
}

var orders = [];

for (let i = 1; i <= 103; i++) {
  var fname = faker.name.firstName();
  var sname = faker.name.lastName();
  var order = {
    id: i,
    name: `${fname} ${sname}`,
    email: faker.internet.email(fname, sname),
    address: faker.address.zipCode(),
    country: faker.address.country(),
    shipped: faker.random.boolean(),
    products: []
  }
  var productCount = faker.random.number({ min: 1, max: 5 });
  var product_ids = [];
  while (product_ids.lengh < productCount) {
    let candidateId = faker.random.number({ min: 1, max: products.lengh });
    if (product_ids.indexOf(candidateId) === -1) {
      product_ids.push(candidateId);
    }
  }

  for(let j =0 ;j < productCount; j++){
       order.products.push({
         quantity: faker.random.number({min:1, max:10}),
         product_id: products_ids[j]
       });
  }

  orders.push(order);
}

module.exports = () => ({
  categories, products, orders
})