/**
 * Created by aricaric on 16/10/2.
 */
var routes = [ '../routes/contact' ];

module.exports = function (app) {
    for(var  i = 0; i < routes.length; i++){
        app.use('/', require(routes[i]));
    }
}