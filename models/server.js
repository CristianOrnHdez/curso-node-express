const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middleware();

        //Rutas de la aplicacion
        this.rutas();
    }

    middleware(){
        //CORS
        this.app.use(cors())

        //LECTURA Y ALGO DEL BODY
        this.app.use(express.json())

        //DIRECTORIO PUBLIC
        this.app.use(express.static('public'));

    }

    rutas(){
        this.app.use('/usuarios/api', require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
}

module.exports = Server;