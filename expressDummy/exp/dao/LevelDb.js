// const level = require('level');
// const db = level('../db',{ valueEncoding : 'json' });

const levelup = require('levelup');
// import levelup from 'levelup';
const leveldown =  require('leveldown');
const db = levelup(leveldown('../db'),{ valueEncoding : 'json' }, (err, db)=>{
  
      console.log(' 1 db has opened ?  '+db.isOpen());
      console.log('1 db has closed ? '+db.isClosed());
  });
// db.put('wife', 'Padmasankari', function(err) {
//   if (err) return console.log('Ooops!', err)

//   db.get('name', function(err, value) {
//     if (err) return console.log('Ooops!', err)

//     console.log('\n husband = ' + value)
//   }) 
// })



console.log('db has opened ?  '+db.isOpen());
console.log('db has closed ? '+db.isClosed());

db.on('put', (key, value)=>{
   console.log('For '+key + " value "+value+" has put");
});

db.on('batch',(operations)=>{
  console.log('count of batch operation '+operations.length);
})

db.on('ready', ()=>{
  
  
  console.log('Ha Ha Db has opened ');
});


var empl = {
  
  "name":"AnotherTe",
  "age":"4",
  "sex":"male",
}

db.put('employee', empl, (err) => {
  if (err) return console.log('Ooops!', err)

  db.get('employee5', function(err, value) {
    if (err.notFound) return console.log('Ooops!', err)

   // console.log('\n emplyee \n ' + JSON.stringify(value));
  }) 
})

db.put('wipleW','uouer')
.then(function(){ console.log('notingspecial');})
.then((value)=> console.log(value))
.catch((err) => console.log(err));



// db.del('employee', (err)=>{
  
//   if(err == null){
//       console.log('deleted..');
//      }
// });

// // db.del('employee', (err)=>{
// //   console.log('deleted succfully');
// // })

// db.get('employee', (err,value)=>{
//    console.log(value);
// });

// const operation = [
//   {type:"put", key:"city1", value:"Bangalore"},
//   {type:"put", key:"city2", value: "chennai"},
//   {type:'del', key:"city2"}
//   ]

// db.batch(operation, (error)=>{
  
//   if(error){
//     console.log('error has occurred');
//   }else{
//     console.log('Batch has completed succussfully');
//   }
  
// });

// db.get('city1',(err, value)=> console.log(value));

db.batch().del('jet1')
          .put('userName', 'simpleUser')
          .put('userAge','234')
          .write(()=>{console.log('batch has completed in chained form Mode !!');});
// db.get('name2', function(err, JSON.str) {
//   if (err) return console.log('Ooops!', err)

//   console.log('\n wife  = ' + value)
// })

const stream = db.createReadStream();
stream.on('data', function(data){  
  console.log('key: '+data.key+", value: "+data.value);
});

stream.on('end', function(){
   console.log('Stream end');
});

stream.on('close', function(){
  console.log('Stream closed ');
});

stream.on('error', (err)=>{
  console.log('Error has ccored ');
});


// const keyStream = db.createKeyStream();
// keyStream.on('data', (key)=>{
//   console.log(key);
// });

// db.close((err)=>{
  
//   console.log('2 db has opened ?  '+db.isOpen());
//   console.log('2 db has closed ? '+db.isClosed());
// });


