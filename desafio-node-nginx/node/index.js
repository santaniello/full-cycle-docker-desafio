var random_name = require('node-random-name');
const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const config = {
    host: 'db',
    user: 'fsantaniello',
    password: 'FoxyL@dy51690714',
    database:'nodedb'
};
var connection = mysql.createConnection(config)
connection.connect((err)=> {
    if(!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

app.get('/', (req,res) => {    
    connection.query('INSERT INTO people(name) values(?)', random_name(), (err, rows, fields) => {
        if (!err){
            connection.query('SELECT * FROM people', (err, rows, fields) => {
                if (!err){                    
                    res.send('<h1>Full Cycle Rocks!</h1><br>'+ rows.map(r=> r.name));  
                  for(const r of rows){
                    console.log(r);      
                  }
                }
                else{
                  console.log(err);
                }
            })
        }else{
          console.log(err);
        }  
    });    
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
