define(function(require, exports, module) {

    var ZoneHelper = {
        _fillMissingZones: function(shots) {
            for (idx = 1; idx <= 14; idx++) {
                if ((shots.length < idx) || (shots[idx - 1].key != idx)) {
                    shots.splice(idx - 1, 0, {
                        key: idx,
                        value: 0,
                        made: 0,
                        points: 0,
                        id: 'zone14_' + idx
                    });
                }
            }
            return shots;
        },
        _appendMadeShots: function(shots, made_shots) {
            for (idx in made_shots) {
                // Append made shot count to base zone data array
                zone = shots[made_shots[idx].key - 1];
                zone.made = made_shots[idx].value;
                zone.id = 'zone14_' + (parseInt(idx) + 1);

                // Append points per shot metric
                if (zone.key > 0 && zone.key <= 5) {
                    zone.pps = Math.round(zone.made * 3 * 100 / zone.value) / 100;
                    zone.points = zone.made * 3;
                } else if (zone.key > 5) {
                    zone.pps = Math.round(zone.made * 2 * 100 / zone.value) / 100;
                    zone.points = zone.made * 2;
                }
            }
            return shots;
        },
        _countTotalShots: function(shots) {
            total = 0;
            for (idx in shots) {
                zone = shots[idx];
                total += zone.value;
            }
            return total;
        },
        _appendDataToZoneAndLabels: function(court, data, selector) {
            zone_class = ".shotzone_" + selector;

            court.selectAll(zone_class + "_label")
                .data(data);
            court.selectAll(zone_class + "_label_sec")
                .data(data);
            court.selectAll(zone_class)
                .data(data);
        },
        _convertCrossFilterDataToArray: function(data) {
            var shots_by_zone = data.group();

            var shots_made_by_zone = data.group();
            var shots_made = shots_made_by_zone.reduceSum(function(d) {
                return d.shm;
            });

            var zone_all = shots_by_zone.all();
            var zone_made = shots_made_by_zone.all();

            var all_zone_shots = this._fillMissingZones(zone_all);
            var all_zone_shots = this._appendMadeShots(zone_all, zone_made);

            return all_zone_shots;
        },
    }

    // module.exports = ZoneHelper;

});