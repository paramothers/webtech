let fs = require("fs");

function readCatelogSync() {

  let file = "./data/catalog.json";

  console.log(fs.existsSync(file));
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file);
    let catalog = JSON.parse(content);
    return catalog;
  }

  return undefined;
}

exports.findItems = function(catagoryId) {
  console.log("Returning all item for category id " + catagoryId);
  let catalog = readCatelogSync();
  if (catalog) {
    let items = [];

    for (var index in catalog.catalog) {
      if (catalog.catalog[index].categoryId === catagoryId) {
        let category = catalog.catalog[index];
        for (let itemIndex in category.items) {
          items.push(category.items[itemIndex]);
        }
      }
    }

    return items;
  }
  return undefined;
};

exports.findItem = function(catagoryId, itemId) {
  console.log("Looking for item with id ", itemId);
  let catalog = readCatelogSync();
  if (catalog) {
    for (let index in catalog.catalog) {
      if (catalog.catalog[index].categoryId === catagoryId) {
        let catagory = catalog.catalog[index];
        for (let itemIndex in catagory.items) {
          if (catagory.items[itemIndex].itemId === itemId) {
            return catagory.items[itemIndex];
          }
        }
      }
    }
  }
  return undefined;
};

exports.getCatagories = function() {
  console.log("Looking for all the catagory ");
  let catalog = readCatelogSync();
  if (catalog) {

    let catagories = [];
    for (const cate of catalog.catalog) {

      let catagory = {};
      console.log(cate);
      catagory.catagoryId = cate.categoryId;
      catagory.catagoryName = cate.categoryName;

      catagories.push(catagory);
    }

    return catagories;
  }
  return [];
};
