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

var cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/cep/:filter', (req, res) => {

	filter = req.params.filter;
	
	if (filter != '') {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade')
	                   .orWhere('txt_cep', filter)	 	                   
					   .limit(10);
	} else {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade').limit(10)
	}
	
	list()
	.then(data => res.json(data))
})

app.get('/api/v1/bairro/:filter', (req, res) => {

	filter = req.params.filter;
	
	if (filter != '') {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade')	   
					   .orWhere('txt_bairro', 'like', '%'+filter+'%')	 					   
					   .limit(10);
	} else {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade').limit(10)
	}
	
	list()
	.then(data => res.json(data))
})

app.get('/api/v1/cidade/:filter', (req, res) => {

	filter = req.params.filter;
	
	if (filter != '') {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade')	   
					   .orWhere('txt_cidade_uf', 'like', '%'+filter+'%')
					   .limit(10);
	} else {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade').limit(10)
	}
	
	list()
	.then(data => res.json(data))
})

app.get('/api/v1/localidade/:filter', (req, res) => {

	filter = req.params.filter;
	
	if (filter != '') {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade')	   
					   .orWhere('txt_localidade', 'like', '%'+filter+'%')
					   .limit(10);
	} else {
		list = () =>  knex('cep').select('ID','txt_cep as cep','txt_cidade_uf as cidadeUf','txt_bairro as bairro','txt_localidade as localidade').limit(10)
	}
	
	list()
	.then(data => res.json(data))
})

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`CEP REST API started on http://localhost:${port}\nPress Ctrl+C to terminate.`)
})
