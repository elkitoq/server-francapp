const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser');
const app = express()

const router = require('./routes/worksRoutes');


const PORT = process.env.PORT || 4000

const uri = "mongodb://localhost:27017/works";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(body_parser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
