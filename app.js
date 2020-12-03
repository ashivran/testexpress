const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.get('/', function (req, res) {
  res.send(index.html)
})

app.listen(process.env.port || 3000)
