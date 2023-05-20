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
};