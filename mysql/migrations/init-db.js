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

        await connection.query(`
        CREATE TABLE users (
            id int auto_increment,
            username varchar(255) not null,
            primary key (id)
          )  
        `);
        console.log("created table users")

        await connection.query(`    
        CREATE TABLE users_symbols (
            id int auto_increment,
        user_id int not null,
        symbol varchar(3) not null,
            primary key (id)
        )`  
    );
    console.log('created table symbol')
    } catch(e){
        console.log(e)
    }
  })();