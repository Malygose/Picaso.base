var server = require('geronimo.server');

/**
 * 声明web服务对象
 */
module.exports.app = function() {
    var app = new server();
    global.app = app;
    global.middle = app.getMiddle();
    return app;
};
