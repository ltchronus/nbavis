define(function(require, exports, module) {

    var ShotFilterArray = function(data) {
        this.data = data;
    }

    ShotFilterArray.prototype = new ShotFilter();
    ShotFilterArray.prototype.constructor = ShotFilterArray;
    ShotFilterArray.prototype.filter = function(all_filters) {

        var filtered_shots = this.data;

        var filters = {};
        filters.period = function(shots, opts) {
            return shots.filter(function(d) {
                return $.inArray(d.p, opts) > -1
            });
        };

filters.game = function(shots, opts) {
return shots.filter(function(d) {
return $.inArray(d.gid, opts) > -1
});
};

filters.homeaway = function(shots, opts) {
return shots.filter(function(d) {
return d.ish == opts
});
};

filters.shot_type = function(shots, opts) {
return shots.filter(function(d) {
return d.st == opts
});
};
filters.margin = function(shots, opts) {
switch (parseInt(opts)) {
case -15:
return shots.filter(function(d) {
return d.mgn <= -15
});
break;
case -7:
return shots.filter(function(d) {
return d.mgn >= -14 && d.mgn <= -7
});
break;
case -1:
return shots.filter(function(d) {
return d.mgn >= -6 && d.mgn <= -1
});
break;
case 0:
return shots.filter(function(d) {
return d.mgn == 0
});
break;
case 1:
return shots.filter(function(d) {
return d.mgn >= 1 && d.mgn <= 6
});
break;
case 7:
return shots.filter(function(d) {
return d.mgn >= 7 && d.mgn <= 14
});
break;
case 15:
return shots.filter(function(d) {
return d.mgn >= 15
});
break;
default:
return shots;
}
};

for (var key in all_filters) {
if (all_filters[key] instanceof Array) {
if (all_filters[key].length > 0) {
filtered_shots = filters[key](filtered_shots, all_filters[key]);
}
} else if (all_filters[key] !== '') {
filtered_shots = filters[key](filtered_shots, all_filters[key]);
}
}
return filtered_shots;
};


// module.exports = ShotFilterArray;

});