console.log("Moikka moiii")

const express = require('express')
const app = express()
//const port = 3000
app.listen(3000, () => console.log ("kuuntelen"));
app.use(express.static("public"));
console.log("Serveri kaynissa!");
