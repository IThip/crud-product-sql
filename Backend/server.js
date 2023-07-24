// const express = require("express")
// const mysql = require('mysql')
// const cors = require('cors')

// const app = express()
// app.use(cors())

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "my_store_db"
// })

// app.get('/products', (req,res) => {
//     db.query("SELECT * FROM products", (err, result) => {
//         if(err){
//             console.log(err)
//         } else {
//              res.send(result)
//         }

//     })
// })

// app.post('/create', (req, res) => {
//     const productname = req.body.productname
//     const code = req.body.code
//     const quantity = req.body.quantity
//     const created_at = req.body.created_at

//     db.query("INSERT INTO products (productname, code, quantity, created_at) VALUES(?,?,?,?)",
//         [productname, code, quantity, created_at],
//         (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("Value inserted")
//             }
//         })

// })
// app.listen(3001,() => {
//     console.log("listening")
// })

const express = require("express");

const cors = require("cors");

const mysql = require("mysql");


const app = express(); app.use(express.json());
app.use(cors());
const db = mysql.createConnection({ 
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "my_store_db" })

app.get("/", (req, res) => { 
    const sql = "SELECT * FROM products"; 
    db.query(sql, (err, data) => { 
        if (err) 
        return res.json("Error"); 
        return res.json(data); 
    }); 
});

app.post('/login', (req,res) =>{
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";


    db.query(sql, [req.body.username,
        req.body.password], (err, data) => { 
        if (err) return res.json("Error"); 
        if(data.length > 0){
            return res.json("Login Sucess!!")
        } else {
            return res.json("No Record!!")
        }
    }) 
})
app.post('/create', (req, res) => { 
    const sql = "INSERT INTO products (productname, code, quantity, created_at) VALUES (?)"; 
    const values = [
        req.body.productname,
        req.body.code,
        req.body.quantity,
        req.body.created_at
    ]  

    db.query(sql, [values], (err, data) => { 
        if (err) 
        return res.json("Error"); 
        return res.json(data); 
    }) 
})


app.listen(3001, () => { 
    console.log("listening"); 
})