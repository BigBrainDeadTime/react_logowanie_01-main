const  express = require('express');
const mysql  = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'logowanie_01_react'
})

app.post('/login', (req, res) =>{
    const sql = 'SELECT name, surname FROM data WHERE user=? AND password=?';
   
    db.query(sql, [req.body.user, req.body.password ], (err, data) =>{
        if(err) return res.json({success:false, message:'Błąd logowania'});            
        if(data.length>0) return res.json({success:true,data:data});
        else return res.json({success:false, message:'Błędny login lub hasło'})
    })

})
app.post('/Pytania', (req, res) =>{
    const sql = 'SELECT Pytanie, Odpowiedz,A,B,C,D FROM Pytania WHERE Id=?';
   
    db.query(sql, [req.body.user, req.body.password ], (err, data) =>{
        if(err) return res.json({success:false, message:'Błąd Pobrania'});            
        if(data.length>0) return res.json({success:true,data:data});
        else return res.json({success:false, message:'Błędne'})
    })

})
app.listen(8081, () => {
    console.log('Nasłuchuję na porcie 8081...');
});

