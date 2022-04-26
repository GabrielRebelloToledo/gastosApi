'use strict';

var dbConn = require('../../config/db.config');
const nodemailer = require("nodemailer");
const details = require("./details.json");

//Criando o objeto Employee
var Receita = function(receita) {
    this.usuarioId = receita.usuarioId;
    this.valor = receita.valor;
    this.categoria = receita.categoria;
    this.descricao = receita.descricao;
    this.data = receita.data;
    
};





Receita.create = function(newReceita, result) {
     dbConn.query("INSERT INTO receitas SET ?", newReceita, function(err, res) {
        if (err) {
            //console.log("error: ", err);

            result(err, null);
        } else {
            //console.log(newEmp);
            result(null, res.insertId);
        }
    }); 

    
};





Receita.findById = function(id, result) {
    dbConn.query("Select * from employees where id = ? ", id, function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Receita.findByIdAll = function(id, result) {
    dbConn.query("Select * from employees where usuario = ? ", id, function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(err, null);
        } else {
            //console.log('Aquii!!!')
            result(null, res);
        }
    });
};



Receita.findAll = function(result) {
    dbConn.query("Select * from receitas", function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            //console.log('employees : ', res);
            result(null, res);
        }
    });
};

Receita.SumAllInd = function(result) {
    console.log('Aqui 2')
    dbConn.query("Select sum(valor) as valor from receitas", function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            //console.log('employees : ', res);
            result(null, res);
        }
    });
};
Receita.update = function(id, employee, result) {

    if (employee.usuario == 'cantina' || employee.usuario == 'admin') {
        //console.log('Aqui cantina')
        dbConn.query("UPDATE employees SET nome=?,responsaveis=?,email=?,telefone=?,sexo=?,nascimento=?,parentesco=?,nivelescola=?,turma=?,serie=?,turno=? WHERE id = ?", [employee.nome, employee.responsaveis, employee.email, employee.telefone, employee.sexo, employee.nascimento, employee.parentesco, employee.nivelescola, employee.turma, employee.serie, employee.turno, id], function(err, res) {
            if (err) {
                //console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    } else {
        dbConn.query("UPDATE employees SET nome=?, usuario=?,responsaveis=?,email=?,telefone=?,sexo=?,nascimento=?,parentesco=?,nivelescola=?,turma=?,serie=?,turno=? WHERE id = ? AND usuario= ?", [employee.nome, employee.usuario, employee.responsaveis, employee.email, employee.telefone, employee.sexo, employee.nascimento, employee.parentesco, employee.nivelescola, employee.turma, employee.serie, employee.turno, id, employee.usuario], function(err, res) {
            if (err) {
                //console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };
}

/* dbConn.query("UPDATE employees SET nome=?, usuario=?,responsaveis=?,email=?,telefone=?,sexo=?,nascimento=?,parentesco=?,nivelescola=?,turma=?,serie=?,turno=? WHERE id = ? AND usuario= ?", [employee.nome, employee.usuario, employee.responsaveis, employee.email, employee.telefone, employee.sexo, employee.nascimento, employee.parentesco, employee.nivelescola, employee.turma, employee.serie, employee.turno, id, employee.usuario], function(err, res) {
    if (err) {
        console.log("error: ", err);
        result(null, err);
    } else {
        result(null, res);
    }
}); */

Receita.delete = function(id, result) {
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports =
Receita