'use strict';

const Categoria = require('../models/categoria.model');

exports.create = function(req, res) {
    
    const new_categoria = new Categoria(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Categoria.create(new_categoria, function(err, categoria) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Categoria added successfully!", data: categoria });
        });
    }
};

exports.findAll = function(req, res) {
    Categoria.findAll(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};