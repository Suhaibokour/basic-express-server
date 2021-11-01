'use strict';

const express = require( 'express' );
const notFoundHandler = require ( './error-handlers/404.js' );
const errorHandler = require ( './error-handlers/500.js' );
const logger = require ( './middleware/logger.js' );
const validator = require ( './middleware/validator.js' );


const app = express();
app.use( express.json() );
app.use( logger );

app.get( '/',( req,res )=>{
  res.send( 'Hello there' );
} );


app.get( '/person',validator, ( req,res )=>{
  res.json( {
    name: req.query.name,
  } );
} );

app.use( '*', notFoundHandler );
app.use( errorHandler );


function start ( PORT ) {
  app.listen ( PORT,()=>{
    console.log( `listen on PORT ${PORT}` );
  } );
}


module.exports = {
  app:app,
  start:start 
};