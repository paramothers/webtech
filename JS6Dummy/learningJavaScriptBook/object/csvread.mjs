const productsCSV = `name, category, price 12 Klingon Letter Opener, Office Warfare, 
19.99 13 Backpack of Holding, Travel, 
29.99 14 Tardis Alarmclock, Merchandise, 15.99`;

const trim = s => s.match(/\W*(.+)\W*/)[1];

const processCSV = (productsCSV) => {

   return productsCSV.split("\n")
    .slice(1)
    .map(trim);
}

const convertObject = (productArray) => {

    productArray.map( (eachProduct) => {

        let product = eachProduct.split(",");
        let productObject = {
            name: product[0],
            category: product[1],
            price: product[2],
        }
        
        console.dir(productObject);
    });
}

export const parseCSV = () => {

    convertObject(processCSV(productsCSV));
} 