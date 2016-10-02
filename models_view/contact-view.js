/**
 * Created by aricaric on 16/10/2.
 */
var mongoose = require('mongoose');
var Contact = require('../models/contact');

module.exports = {
    getViewModel: function (req) {
        var viewModel = {
            _id: null,
            name: null,
            mobile: null,
            email: null,
            remark: null
        };

        if(req){
            if(req.body._id != null && req.body._id != undefined && req.body._id != '') viewModel._id = mongoose.Types.ObjectId(req.body._id);
            if(req.body.name != null && req.body.name != undefined) viewModel.name = req.body.name;
            if(req.body.mobile != null && req.body.mobile != undefined) viewModel.mobile = req.body.mobile;
            if(req.body.email != null && req.body.email != undefined) viewModel.email = req.body.email;
            if(req.body.remark != null && req.body.remark != undefined) viewModel.remark = req.body.remark;
        }
        return viewModel;
    },
    getEntity: function (req) {
        var entity = new Contact();
        if(req.body._id != null && req.body._id != undefined && req.body._id != '') entity._id = mongoose.Types.ObjectId(req.body._id);
        if(req.body.name != null && req.body.name != undefined) entity.name = req.body.name;
        if(req.body.mobile != null && req.body.mobile != undefined) entity.mobile = req.body.mobile;
        if(req.body.email != null && req.body.email != undefined) entity.email = req.body.email;
        if(req.body.remark != null && req.body.remark != undefined) entity.remark = req.body.remark;
        return entity;
    },
    fillEntity: function (originalEntity ,req) {
        if(req.body._id != null && req.body._id != undefined) originalEntity._id = mongoose.Types.ObjectId(req.body._id);
        if(req.body.name != null && req.body.name != undefined) originalEntity.name = req.body.name;
        if(req.body.mobile != null && req.body.mobile != undefined) originalEntity.mobile = req.body.mobile;
        if(req.body.email != null && req.body.email != undefined) originalEntity.email = req.body.email;
        if(req.body.remark != null && req.body.remark != undefined) originalEntity.remark = req.body.remark;
    }
};