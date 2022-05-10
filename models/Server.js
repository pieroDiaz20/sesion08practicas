const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPatch="/api/usuarios";
        this.DirectorioPublico();   
        this.routes();
        
    }
    //LO QUE SE VA A CONSUMIR
    DirectorioPublico(){
        this.app.use(cors());
        //serializa los metodos post y delete,lectura de parseo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.usuariosPatch,require('../routes/usuarios'));
        
    }
    lista(){
        this.app.listen(this.port,()=>{console.log('HOLA',this.port)});
    }
}

module.exports = Server;
