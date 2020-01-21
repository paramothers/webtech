const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send("Hi param, i am from express");
})

app.listen(3000, () => console.log('Express server run on 3000'))