/**
 * Created by aricaric on 16/10/2.
 */
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    remark: String
});

module.exports = mongoose.model('contacts', schema);