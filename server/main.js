const express = require('express')
const path = require("path");
const app = express()

app.use('/', express.static(path.join(__dirname, './dist')))
app.listen(3010, () => {
  console.log('tank server running at http://localhost:3010')
})