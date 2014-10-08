define(function(require, exports, module) {

    var ShotFilter = require("./ShotFilter");


var ShotFilterEmpty = function(data) {
    this.data = data;
}
ShotFilterEmpty.prototype = new ShotFilter();
ShotFilterEmpty.prototype.constructor = ShotFilterEmpty;
ShotFilterEmpty.prototype.format_data = function(data, helper) {
    data = helper._fillMissingZones(data);
    return data;
}
ShotFilterEmpty.prototype.get_shots = function(data) {
    return data;
}

  // module.exports = ShotFilterEmpty;

});
