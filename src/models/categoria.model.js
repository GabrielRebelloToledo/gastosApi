'use strict';

var dbConn = require('./../../config/db.config');
const nodemailer = require("nodemailer");
const details = require("./details.json");

//Criando o objeto Employee
var Categoria = function(categoria) {
    this.usuarioId = categoria.usuarioId;
    this.categoria = categoria.categoria;
    this.tipo = categoria.tipo;
};

Categoria.create = function(newCategoria, result) {
         dbConn.query("INSERT INTO categorias SET ?", newCategoria, function(err, res) {
        if (err) {
            //console.log("error: ", err);

            result(err, null);
        } else {
            //console.log(newEmp);
            result(null, res.insertId);
        }
    });     
 console.log(newCategoria); 
};

Categoria.findAll = function(result) {
    dbConn.query("Select * from categorias", function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            //console.log('employees : ', res);
            result(null, res);
        }
    });
};


module.exports = Categoria