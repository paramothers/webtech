let express = require('express');
let catalog = require('../modules/catelog');

let router = express.Router();

router.get('/', (request, response, next)=>{

    let categories = catalog.getCatagories();
    response.json(categories);
});

router.get('/:categoryId', (request, response, next) => {

   let items =  catalog.findItems(request.params.categoryId);
   if(items === undefined){

       response.writeHead(404, {
           'Content-Type':'text/plain'
       });
       response.end('Not Found');
   }
   response.json(items);
});

router.get('/:categoryId/:itemId', (request, response, next) => {

    let item = catalog.findItem(request.params.categoryId, request.params.itemId);
    if(item === undefined){

        response.writeHead(404, {
            'Content-Type':'text/plain'
        });
    }

    response.json(item);
});

module.exports = router;