pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Build') {
      steps {
        sh 'npm i -save express'
	sh 'npm i -save body-parser'
	sh 'npm i -save path'
	sh 'npm i -save knex'
	sh 'npm i -save sqlite3'	      
      }
    }
    stage('Example') {
      steps {
        sh 'npm i -save express'
	sh 'npm i -save body-parser'
	sh 'npm i -save path'
	sh 'npm i -save knex'
	sh 'npm i -save sqlite3'
	sh 'node server.js'
      }
    }	  
  }
}
