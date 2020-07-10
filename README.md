# CEP > Rest API with SQLite Database

<h2> What is CEP?</h2>
<p>
  <ul>
    <li><a href="https://pt.wikipedia.org/wiki/Código_de_Endereçamento_Postal" target="_blank">Wikipedia</a></li>
    <li><a href="https://www.correios.com.br/precisa-de-ajuda/o-que-e-cep-e-por-que-usa-lo" target="_blank">Correios</a></li>
    <li><a href="https://www.significados.com.br/cep/" target="_blank">Significados</a></li>
  </ul>
</p>

<h2>About this Central Database</h2>
<p>
  <ul>
    <li><a href="https://www.correios.com.br/a-a-z/dne" target="_blank">Diretório Nacional de Endereços</a></li>
    <li><a href="https://www.correios.com.br/precisa-de-ajuda/o-que-e-cep-e-por-que-usa-lo/bases-de-cep" target="_blank">Bases de CEP</a></li>
    <li><a href="http://shopping.correios.com.br/wbm/store/script/wbm2400902p01.aspx?cd_company=ErZW8Dm9i54=&cd_department=SsNp3FlaUpM=" target="_blank">Loja dos Correios</a></li>
  </ul>
</p>
  
<h2> NodeJs REST API Service</h2>
<p>
  <ul>    
    <li>Docker Hub => <a href="https://hub.docker.com/r/avmesquita/apicepnode">Image</a></li>
    <li>OpenShift  => <a href="http://consulta-cep-api-cep.apps.us-east-2.online-starter.openshift.com/">Production</a></li>    
    <li>Heroku     => <a href="https://api-cep-node.herokuapp.com/">Published</a></li>
  </ul>  
  <pre>
    <b>=> To Build</b>
    $> npm i -save express
	$> npm i -save cors
    $> npm i -save body-parser
    $> npm i -save path
    $> npm i -save knex
    $> npm i -save sqlite3
    $> npm i -save swagger-ui-express
    $> node server.js
  </pre>
</p>  
