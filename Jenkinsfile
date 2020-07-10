pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {	  
    stage('Cloning Git') {
      steps {
        git 'https://github.com/avmesquita/CEP-API-node'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm i -save express'
		sh 'npm i -save cors'
	    sh 'npm i -save body-parser'
	    sh 'npm i -save path'
	    sh 'npm i -save knex'
	    sh 'npm i -save sqlite3'	      
        sh 'npm install'
      }
    }     
  }
}
