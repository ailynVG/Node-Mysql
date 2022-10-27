var mysql = require('mysql');//
var connection = mysql.createConnection({//Crear conexión del archivo con la base de datos
   host: 'localhost',//local
   user: 'root',//usuario
   password: '',//contraseña
   database: 'mitzi'//Nombre Base de Datos
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion exitosa.');
   }
});
connection.query('SELECT * FROM usuario', function(error, results, fields){
    if(error)
    throw error;
    results.forEach (result =>{
        console.log(result);
    });
})
connection.end();
