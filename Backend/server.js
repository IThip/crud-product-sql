const express = require("express");

const cors = require("cors");

const mysql = require("mysql");


const app = express(); app.use(express.json());
app.use(cors());
//Set ค่าเริ่มต้นของการเชื่อมต่อระหว่าง Frontend กับ Database
const db = mysql.createConnection({ 
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "my_store_db" })

// API สำหรับการดึงข้อมูลสินค้า
app.get("/", (req, res) => { 
    const sql = "SELECT * FROM products"; 
    db.query(sql, (err, data) => { 
        if (err) 
        return res.json("Error"); 
        return res.json(data); 
    }); 
});

// API สำหรับหน้า Login
app.post('/login', (req,res) =>{
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

    //ทำการ query username password ใน database
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

// API สำหรับการเพิ่มข้อมูลสินค้า
app.post('/create', (req, res) => { 
    const sql = "INSERT INTO products (productname, code, quantity, created_at) VALUES (?)"; 
    const values = [
        req.body.productname,
        req.body.code,
        req.body.quantity,
        req.body.created_at
    ]  
    //ทำการ query values คือ ชื่อสินค้า รหัสสินค้า จำนวนสินค้า วันที่สร้างสินค้า ใน database
    db.query(sql, [values], (err, data) => { 
        if (err) 
        return res.json("Error"); 
        return res.json(data); 
    }) 
})

//Set Port สำหรับการดึง API
app.listen(3001, () => { 
    console.log("listening"); 
})