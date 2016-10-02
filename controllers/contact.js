/**
 * Created by aricaric on 16/10/2.
 */
var express = require('express');
var mongoose = require('mongoose');
var Contact = require('../models/contact');
var contactView = require('../models_view/contact-view');
mongoose.connect('mongodb://localhost/test');

function getContact(id, cb) {
    var result = { err: null, data: null };
    Contact.find({_id: id}, function (err, doc) {
        cb(err, doc);
    });
}

module.exports = {
    list: function (req, res, next) {
        res.render('contact/index');
    },
    list_json: function (req, res, next) {
        Contact.find(function (err, doc) {
            res.json({ records: doc });
        });
    },
    add_get: function (req, res, next) {
        var data = contactView.getViewModel(req);
        res.render('contact/update', { action: 'add', model: data, err: '' });
    },
    add_post: function (req, res, next) {
        var entity = contactView.getEntity(req);
        entity.save(function (err) {
            if(err){
                var viewMode = contactView.getViewModel(req);
                res.render('contact/update', { action:'add', model: viewMode, err: err.message });
                return;
            }
            res.redirect('/');
        });
    },
    update_get: function (req, res, next) {
        var id = req.param('id');
        var result = { err: null, data: null };
        getContact(id, function (err, doc) {
            var data = null;
            if(!err && doc.length > 0){
                data = doc[0];
            }
            res.render('contact/update',{ action: 'update', model: data , err: ''});
        });
    },
    update_post: function (req, res, next) {
        getContact(req.body._id, function (err, doc) {
            var entity = doc[0];
            contactView.fillEntity(entity,req);
            entity.save(function (err) {
                if(err){
                    var viewMode = contactView.getViewModel(req);
                    res.render('contact/update', { action:'add', model: viewMode, err: err.message });
                    return;
                }
                res.redirect('/');
            });
        });
    },
    delete_get: function (req, res, next) {
        getContact(req.query.id, function (err, doc) {
            if(err || doc.length == 0){
                res.redirect('/');
                return;
            }
            doc[0].remove();
            res.redirect('/');
        })
    },
    getContact: function (req, res, next) {
        var id = req.param('id');
        var result = { err: null, data: null };
        getContact(id, function (err, doc) {
            var data = null;
            if(!err && doc.length > 0){
                data = doc[0];
            }
            res.json({ err: err, data: data });
        });
    }
};