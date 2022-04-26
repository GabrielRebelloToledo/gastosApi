'use strict';

const Receita = require('../models/receita.model');


exports.findAll = function(req, res) {
    Receita.findAll(function(err, employee) {
        console.log('controller aqui')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};
exports.SumAllInd = function(req, res) {
    Receita.SumAllInd(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};
exports.findByIdAll = function(req, res) {
    Receita.findByIdAll(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.SumAllInd = function(req, res) {
    Receita.SumAllInd(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function(req, res) {
    const new_receita = new Receita(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Receita.create(new_receita, function(err, receita) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Receita added successfully!", data: receita });
        });
    }
};



exports.findById = function(req, res) {
    Receita.findById(req.params.id, function(err, employee) {
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
        Receita.update(req.params.id, new Receita(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Receita.delete(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};