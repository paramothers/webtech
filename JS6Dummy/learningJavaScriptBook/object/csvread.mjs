const productsCSV = `name, category, price 12 Klingon Letter Opener, Office Warfare, 
19.99 13 Backpack of Holding, Travel, 
29.99 14 Tardis Alarmclock, Merchandise, 15.99`;

const trim = s => s.match(/\W*(.+)\W*/)[1];

const processCSV = productsCSV => {
  return productsCSV
    .split("\n")
    .slice(1)
    .map(s => s.split(", "))
    .map(converToObjectByDestructuring);
   
};

const converToObjectByDestructuring = ([name, category, price]) =>
  objectDestructing({
    name,
    category,
    price
  });

const convertObject = productArray => {
  productArray.map(eachProduct => {
    let [name, product, category] = eachProduct.split(",");
    let productObject = {
      name,
      product,
      category
    };

    const {name, ...elseKey} = productObject;
    const myObject = {
        a: 1,
        ...elseKey
    }
    console.dir(productObject);
  });
};

const objectDestructing = ({name, price}) => {
  console.log(`Parithi: Product ${name} and its price ${price}`);
};



const objectDestructing2 = (product) => {
    const { name, price } = product;
    console.log(`Pa vakab: Product ${name} and its price ${price}`);
  };

export const parseCSV = () => {
  processCSV(productsCSV);
};
