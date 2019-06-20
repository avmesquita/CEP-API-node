const port = process.env.PORT || 10000;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const knex = require('knex')({
  client: 'sqlite3',
  connection: { filename: './cep.db3' },
  useNullAsDefault: true,
});
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/cep/:filter', (req, res) => {

 filter = req.params.filter;

 if (filter != '') {
     list = () =>  knex('cep').select('*')
	                   .orWhere('txt_cep', filter)	 
	                   .orWhere('txt_cidade_uf', 'like', '%'+filter+'%')	 
					   .orWhere('txt_bairro', 'like', '%'+filter+'%')	 
					   .orWhere('txt_localidade', 'like', '%'+filter+'%')
					   .limit(10);
 } else {
	 list = () =>  knex('cep').select('*').limit(10)
 }
  list()
    .then(data => res.json(data))
})

/*
app.get('/', (req, res) => {
	
  hostname = req.headers.host;
  
  res.json('{ "usage" : "${hostname}/api/v1/cep/<value>" }');
})
*/

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`CEP REST API started on http://localhost:${port}\nPress Ctrl+C to terminate.`)
})
