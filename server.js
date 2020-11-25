console.log("Moikka moiii")

const express = require('express')
const app = express()
//const port = 3000
app.listen(3000, () => console.log ("kuuntelen"));
app.use(express.static("public"));
console.log("Serveri kaynissaaaaa!");

 app.use(express.json({limit: '1mb'}));

const pankkikorttitiedot = [
   {
     "nimi": "Tomsku tomaatti",
     "pin": "0142"
   }
]



const paikkatiedot = [
   {
     "latitude": "61.4740",
     "longitude": "23.8419",
     "paikka": "Turtola",
     "Arvostelu": "Tavallaan koti",
     "Arvostelija": "Tomaatti"

   }
]
app.get('/haevierailut', function (req, res) {
  res.send(paikkatiedot)
})



app.get('/turvallinenpankintiedotpankille', function (req, res) {
  res.send(pankkikorttitiedot)
})

app.post('/pankkitietojen_talletus', function (req, res) {
pankkikorttitiedot.push(req.body);
 console.log(pankkikorttitiedot);
 res.send(200);
})
