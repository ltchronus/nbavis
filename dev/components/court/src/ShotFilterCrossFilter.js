define(function(require, exports, module) {

    var ShotFilter = require("./ShotFilter");


var ShotFilterCrossFilter = function(data) {
    this.data = data;
}
ShotFilterCrossFilter.prototype = new ShotFilter();
ShotFilterCrossFilter.prototype.constructor = ShotFilterCrossFilter;
ShotFilterCrossFilter.prototype.format_data = function(data, helper) {
    var shots_by_zone       = data.group();

    var shots_made_by_zone  = data.group();
    var shots_made          = shots_made_by_zone.reduceSum(function(d){return d.shm;});

    var zone_all            = shots_by_zone.all();
    var zone_made           = shots_made_by_zone.all();

    var all_zone_shots = helper._fillMissingZones(zone_all);
    var all_zone_shots = helper._appendMadeShots(zone_all, zone_made);

    return all_zone_shots;
}
ShotFilterCrossFilter.prototype.get_shots = function(data) {
    return data.group().all();
}





  // module.exports = ShotFilterCrossFilter;

});
