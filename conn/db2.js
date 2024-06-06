const mysql = require('mysql2');
const pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Mmking12',
    database : 'flights_projact'
});

module.exports={
    pool
}


// Connection to the sql =>
//pool.query('SELECT * FROM flights_projact.customers;',(error,results,fields)=>{
//if(error){
  //  throw new Error(error)
//}
//console.log(results)
//})

// test to check out everything is good
//pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  //  if (error) throw error;
  //  console.log('The solution is: ', results[0].solution);
 // });




 const { error } = require('console')
//const{pool} = require('./db2')
const { promises } = require('dns')
const { resolve } = require('path')
const { rejects } = require('assert')
//................................................................................................
//................................................................................................
//................................................................................................



