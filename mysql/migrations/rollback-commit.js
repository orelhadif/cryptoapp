const mysql = require('mysql2');
const util= require('util')

const connection= mysql.createConnection({
    host: "localhost",
    user: "username",
    password:"password",
    database: "mydb"
});



  connection.connect=util.promisify(connection.connect);
  connection.query=util.promisify(connection.query);
  (async ()=>{
    try{
        await connection.connect();
        console.log('connected');
        
    } catch(e){
        console.log(e)
    }
  })();