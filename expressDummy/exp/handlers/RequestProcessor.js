const levelDb = require('../dao/LevelDb');

/*
let requestProcessor = function() {

  let putHandler = (req, res) => {

    res.send('\n Put handled succfully \n');
  }

  
  let postHandler = (req, res) => {

    res.send('\n Post Handled Succues succussfully \n');
    // res.sendFile('./public/index.html');
  }
  
  let logRequest = (req,res, next) =>{
    
    console.log("logRequest has been initiated ");
    next();
  }
  
  let wrapup = (req,res,next)=>{
    console.log('Request Preprocess has completed ');
    next();
  }

  return {

    putHandler: putHandler,
    postHandler: postHandler,
    logRequest: logRequest,
    wrapup : wrapup
    
  };

}();
*/
const temp = {
    
  putHandler : function(req, res) {

    res.send('\n Put handled succfully \n');
  },

  
  postHandler : function(req, res){

    res.send('\n Post POSTING Handled Succues succussfully \n');
    // res.sendFile('./public/index.html');
  },
  
  logRequest : function(req,res, next) {
    
    console.log("logRequest has been initiated ");
    next();
  },
  
  wrapup : function (req,res,next){
    console.log('Request Preprocess has completed ');
    next();
  }
}

module.exports = temp;