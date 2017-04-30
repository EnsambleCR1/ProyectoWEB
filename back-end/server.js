var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./api/config/database');
var connection = config.database;
//Se declaran todos los accesos de las rutas
carreraRoutes = require('./api/components/carreras/carrera.route');
cursoRoutes = require('./api/components/cursos/curso.route');
solicitudEstudianteRoutes = require('./api/components/solicitudEstudiantes/solicitudEstudiante.route');
<<<<<<< HEAD
//solicitudEstudianteAceptadoRoutes = require('./api/components/solicitudEstudiantesAceptados/solicitudEstudianteAceptado.route');
//solicitudEstudianteRechazadoRoutes = require('./api/components/solicitudEstudiantesRechazados/solicitudEstudianteRechazado.route');
=======
<<<<<<< HEAD
//solicitudEstudianteAceptadoRoutes = require('./api/components/solicitudEstudiantesAceptados/solicitudEstudianteAceptado.route');
//solicitudEstudianteRechazadoRoutes = require('./api/components/solicitudEstudiantesRechazados/solicitudEstudianteRechazado.route');
=======
>>>>>>> 85a0353358099d3528224ad2bf76d79d823b49d4
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b

var app = express();
app.use(express.static(__dirname + "/client"));//maneja archivos estáticos como un app web
app.use(express.static(__dirname + "/client/content/css/bootstrap.css.map"));

app.use(bodyParser.json());
//Permite recibir post
app.use(bodyParser.urlencoded());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(passport.initialize());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.

mongoose.connect(config.database, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.

  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

// Conexion a todas la rutas
app.use('/api', carreraRoutes);//se define el versionamiento del api
app.use('/api', cursoRoutes);//se define el versionamiento del api
<<<<<<< HEAD
app.use('/api', solicitudEstudianteRoutes);//se define el versionamiento del api
//app.use('/api', solicitudEstudianteAceptadoRoutes);//se define el versionamiento del api
//app.use('/api', solicitudEstudianteRechazadoRoutes);//se define el versionamiento del api
=======
<<<<<<< HEAD
app.use('/api', solicitudEstudianteRoutes);//se define el versionamiento del api
//app.use('/api', solicitudEstudianteAceptadoRoutes);//se define el versionamiento del api
//app.use('/api', solicitudEstudianteRechazadoRoutes);//se define el versionamiento del api
=======
app.use('/api', solicitudEstudianteRoutes);//se define el versionamiento del api
>>>>>>> 85a0353358099d3528224ad2bf76d79d823b49d4
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
