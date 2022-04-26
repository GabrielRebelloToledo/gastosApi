'use strict';

const Despesas = require('../models/despesa.model');


exports.findAll = function(req, res) {
    Despesas.findAll(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};

exports.findByIdAll = function(req, res) {
    Despesas.findByIdAll(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.SumAllInd = function(req, res) {
    Despesas.SumAllInd(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function(req, res) {
    const new_despesa = new Despesas(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Despesas.create(new_despesa, function(err, despesa) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Receita added successfully!", data: despesa });
        });
    }
};



exports.findById = function(req, res) {
    Despesas.findById(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Despesas.update(req.params.id, new Despesas(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Despesas.delete(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};