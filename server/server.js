const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');
// const sql = require('../db/databaseReqHandler.js');

app.set('port', 3005);

app.use(express.static('../public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (request, response) => {
  console.log('GET!');
  response.end();
});

app.post('/chat', (request, response) => {
  const { message } = request.body;
  // sql.insertUser('Sam').then(result => {
  //   sql.getUsers().then(result => {
  //     console.log(result);
  //     response.end();
  //   });
  // });
});

app.listen(app.get('port'));
console.log('listening on port 3005....');
