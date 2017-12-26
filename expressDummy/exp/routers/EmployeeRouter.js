const express = require('express');
const router = express.Router();

router.use((req,res, next)=>{
 
  console.log("Entered into ", Date.now());
  next();
});

router.get('/', (req,res)=>{
  
  res.send('from /employee');
});

router.get('/save', (req,res)=>{
  res.send('from /employee/save');
});

module.exports = router;
