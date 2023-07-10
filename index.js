const express = require('express')
const cors =require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    console.log('Hello world')
    res.send('รักนะคะ จุ้บๆ')
})

app.get('/attractions', (req, res) => {
    connection.query('SELECT * FROM attractions',
    function(err, results , fields) {
        res.send(results)
    })
})

app.listen(process.env.PORT || 3000)