const express = require('express')
const app = express()

const db = require('./db.json')


app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

app.get('/db',(req,res)=>{
    res.send(db)
})
