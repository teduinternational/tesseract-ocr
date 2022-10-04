const express = require('express')
const cors = require('cors');

const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))

app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));
let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)
