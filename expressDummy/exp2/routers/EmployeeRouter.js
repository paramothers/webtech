const expres = require("express");

const employeeRouter = expres.Router();

employeeRouter.get('/',(req,res)=>{
    res.send('employee / home has called ');
});
module.exports = employeeRouter;

