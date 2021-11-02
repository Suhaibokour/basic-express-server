'use strict';
require( 'dotenv' ).config();
const PORT = process.env.PORT || 4000 ;
const server = require ( './src/server.js' ) ;
server.start( PORT ) ;