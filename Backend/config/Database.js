import sqlite3 from "sqlite3";
import bcrypt from 'bcrypt';

const db = new sqlite3.Database('mydata.db');
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
db.run('CREATE TABLE IF NOT EXISTS shoes (shoeId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, image TEXT, url TEXT, price INTEGER)');

export const signUp = async(req,res)=>{
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = {username: req.body.username, password: hashPassword}
        db.run(`INSERT INTO users VALUES (?, ?, ?)`, [, user.username, user.password])
        res.status(201).send(user)
    } catch{
        res.status(500).send({msg : "Sign Up Failed"})
    }
}

export const login = async(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const finduserbyname = (username,cb)=>{
        return db.get(`SELECT * FROM users WHERE username=?`,[username],(err,row)=>{
            cb(err,row)
        })
    }
    finduserbyname(username,(err,user)=>{
        if(err)return res.status(500).send("Server Error!")
        else if(!user) return res.status(404).send("Login Failed!")
        else{
            const result = bcrypt.compareSync(password,user.password)
            if(!result) return res.status(401).send("Login Failed!")
            else{
                res.status(200)
                res.send("Login Success!")
            }
        }
    })
}

export default db;