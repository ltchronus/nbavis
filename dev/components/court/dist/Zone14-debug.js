define("court/court/1.0.0/Zone14-debug", [ "./ShotchartUi-debug", "./ZoneHelper-debug", "./color_helper-debug", "./ShotFilterCrossFilter-debug", "./ShotFilter-debug", "d3-debug" ], function(require, exports, module) {
    var ShotchartUi = require("./ShotchartUi-debug");
    var ZoneHelper = require("./ZoneHelper-debug");
    var color_helper = require("./color_helper-debug");
    var ShotFilterCrossFilter = require("./ShotFilterCrossFilter-debug");
    var d3 = require("d3-debug");
    var Zone14 = function(courtobj, data, color_helper) {
        ShotchartUi.call(this);
        this.courtobj = courtobj;
        this.court = this.courtobj.container;
        this.data = data;
        this.selector = ".gz14";
        // 从base.js中加载的
        this.helper = ZoneHelper;
        this.color_helper = color_helper;
        // ShotFilterCrossFilter在base.js中
        this.filterobj = new ShotFilterCrossFilter(data);
    };
    Zone14.prototype = new ShotchartUi();
    Zone14.prototype.constructor = Zone14;
    Zone14.prototype.draw = function(court) {
        var court = this.court;
        var PATH_DATA = {
            nba: [ {
                shotzone: 1,
                d: "M0,0 L30,0 L30,169 L0,169 Z",
                //lbl_x: 0, lbl_y: 70, lbl2_x: 0, lbl2_y: 90
                labels: {
                    offense: {
                        x: 0,
                        y: 80,
                        x2: 0,
                        y2: 90
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 2,
                d: "M30,169 A285,285 0 0,0 204,345 L204,564 L0,564 L0,169 Z",
                //lbl_x: 70, lbl_y: 300, lbl2_x: 70, lbl2_y: 320
                labels: {
                    offense: {
                        x: 110,
                        y: 366,
                        x2: 110,
                        y2: 386
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 3,
                d: "M204,345 A285,285 0 0,0 396,345 L396,564 L204,564 Z",
                //lbl_x: 230, lbl_y: 320, lbl2_x: 230, lbl2_y: 340
                labels: {
                    offense: {
                        x: 280,
                        y: 420,
                        x2: 280,
                        y2: 440
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 4,
                d: "M396,345 A285,285 0 0,0 570,169 L600,169 L600,564 L396,564 Z",
                //lbl_x: 360, lbl_y: 300, lbl2_x: 360, lbl2_y: 320
                labels: {
                    offense: {
                        x: 440,
                        y: 366,
                        x2: 420,
                        y2: 386
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 5,
                d: "M570,0, L600,0 L600,169 L570,169 Z",
                //lbl_x: 470, lbl_y: 70, lbl2_x: 470, lbl2_y: 90
                labels: {
                    offense: {
                        x: 550,
                        y: 80,
                        x2: 550,
                        y2: 90
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 6,
                d: "M31,0 204,0 204,114 L31,114 Z",
                //lbl_x: 80, lbl_y: 60, lbl2_x: 80, lbl2_y: 80
                labels: {
                    offense: {
                        x: 90,
                        y: 60,
                        x2: 90,
                        y2: 80
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 7,
                d: "M30,169 A285,285 0 0,0 204,345 L204,114 L31,114 Z",
                //lbl_x: 90, lbl_y: 170, lbl2_x: 90, lbl2_y: 190
                labels: {
                    offense: {
                        x: 90,
                        y: 170,
                        x2: 90,
                        y2: 190
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 8,
                d: "M204,345 A285,285 0 0,0 396,345 L396,228 L204,228 Z",
                //lbl_x: 230, lbl_y: 240, lbl2_x: 230, lbl2_y: 260
                labels: {
                    offense: {
                        x: 280,
                        y: 280,
                        x2: 280,
                        y2: 300
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 9,
                d: "M396,345 A285,285 0 0,0 570,169 L570,114 L396,114 Z",
                //lbl_x: 360, lbl_y: 170, lbl2_x: 360, lbl2_y: 190
                labels: {
                    offense: {
                        x: 450,
                        y: 170,
                        x2: 450,
                        y2: 190
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 10,
                d: "M396,0 L570,0 L570,114 L396,114 Z",
                //lbl_x: 370, lbl_y: 60, lbl2_x: 370, lbl2_y: 80
                labels: {
                    offense: {
                        x: 450,
                        y: 60,
                        x2: 450,
                        y2: 80
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 11,
                d: "M204,114 L300,114 L300,228 L204,228 Z",
                //lbl_x: 200, lbl_y: 150, lbl2_x: 200, lbl2_y: 170
                labels: {
                    offense: {
                        x: 230,
                        y: 150,
                        x2: 230,
                        y2: 170
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 12,
                d: "M300,114 L396,114 L396,228 L300,228 Z",
                //lbl_x: 270, lbl_y: 150, lbl2_x: 270, lbl2_y: 170
                labels: {
                    offense: {
                        x: 320,
                        y: 150,
                        x2: 320,
                        y2: 170
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 13,
                d: "M204,0 L300,0 L300,114 L204,114 Z",
                //lbl_x: 200, lbl_y: 60, lbl2_x: 200, lbl2_y: 80
                labels: {
                    offense: {
                        x: 230,
                        y: 60,
                        x2: 230,
                        y2: 80
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            }, {
                shotzone: 14,
                d: "M300,0 L396,0 L396,114 L300,114 Z",
                //lbl_x: 270, lbl_y: 60, lbl2_x: 270, lbl2_y: 80
                labels: {
                    offense: {
                        x: 320,
                        y: 60,
                        x2: 320,
                        y2: 80
                    },
                    defense: {
                        x: 0,
                        y: 70,
                        x2: 0,
                        y2: 90
                    }
                }
            } ]
        };
        var paths = PATH_DATA[this.courtobj.court_type], that = this, gz14 = this.court.selectAll(".gz14").data(paths).enter().append("g").attr("class", "gz14 gzone");
        gz14.each(function(v, i) {
            var g = d3.select(this);
            // Shape
            g.append("path").attr("class", "shotzone_14 shotzone").attr("d", v.d).datum({
                shotzone: i + 1,
                value: 0
            });
            // Main text label
            g.append("text").text("zone").attr({
                "class": "shotzone_14_label zone_label",
                x: v.labels["offense"].x,
                y: v.labels["offense"].y
            });
            // Secondary text label
            g.append("text").text(" ").attr({
                "class": "shotzone_14_label_sec zone_label",
                x: v.labels["offense"].x2,
                y: v.labels["offense"].y2
            });
        });
        this.court.selectAll(".gz14").attr("opacity", 0);
        this.court.selectAll(".shotzone_14").attr({
            opacity: .7,
            "stroke-width": 1,
            stroke: "gray",
            fill: "gray"
        });
        this.court.selectAll(".shotzone_14_label").attr({
            "font-size": 20,
            "font-weight": "bolder",
            "font-family": "Oswald,Helvetica",
            fill: "black"
        });
        this.court.selectAll(".shotzone_14_label_sec").attr({
            "font-size": 12,
            "font-family": "Helvetica"
        });
    };
    Zone14.prototype.updateData = function() {
        var all_zone_shots = this.filterobj.format_data(this.data, this.helper);
        this.helper._appendDataToZoneAndLabels(this.court, all_zone_shots, "14");
        var that = this;
        setTimeout(function() {
            that.repositionLabels(that.court, that.selector, ".shotzone_14", 0);
        }, 500);
        return this;
    };
    Zone14.prototype.label = function(metric) {
        var label_functions = {};
        var total_shots = this.helper._countTotalShots(this.filterobj.get_shots(this.data));
        label_functions.shot = {
            label: function(d) {
                return total_shots == 0 ? "N/A" : Math.floor(d.value * 1e3 / total_shots) / 10 + "%";
            },
            label_sec: function(d) {
                return d.value;
            }
        };
        label_functions.fg = {
            label: function(d) {
                return d.value == 0 ? "N/A" : Math.round(d.made * 1e3 / d.value) / 10 + "%";
            },
            label_sec: function(d) {
                return d.made + "-" + d.value;
            }
        };
        label_functions.pps = {
            label: function(d) {
                return d.value == 0 ? "N/A" : Math.round(d.points * 100 / d.value) / 100;
            },
            label_sec: function(d) {
                return d.made + "-" + d.value;
            }
        };
        this.court.selectAll(".shotzone_14_label").transition().duration(1e3).text(function(d) {
            return label_functions[metric].label(d);
        });
        this.court.selectAll(".shotzone_14_label_sec").transition().duration(1e3).text(function(d) {
            return label_functions[metric].label_sec(d);
        });
    };
    Zone14.prototype.fill = function(metric, transition_duration) {
        var fill_functions = {};
        var total_shots = this.helper._countTotalShots(this.filterobj.get_shots(this.data));
        var color_helper = this.color_helper;
        this.court.selectAll(".shotzone_14").transition().duration(transition_duration).attr("fill", function(d) {
            var zone_id = d.id || parseInt(d.shotzone);
            var func = color_helper.getFillFunction(zone_id, metric, total_shots);
            return func(d);
        });
    };
    module.exports = Zone14;
});

define("court/court/1.0.0/ShotchartUi-debug", [], function(require, exports, module) {
    // var d3 = require('d3');
    var ShotchartUi = function(courtobj, data) {
        this.courtobj = courtobj;
        this.court = {};
        this.selector = "";
        this.data = data;
    };
    ShotchartUi.prototype = {
        draw: function() {},
        show: function(transition_duration) {
            transition_duration = typeof transition_duration !== "undefined" ? transition_duration : 1e3;
            this.court.selectAll(this.selector).transition().duration(transition_duration).attr("opacity", 1);
            return this;
        },
        hide: function(transition_duration) {
            transition_duration = typeof transition_duration !== "undefined" ? transition_duration : 1e3;
            this.court.selectAll(this.selector).transition().duration(transition_duration).attr("opacity", 0);
            return this;
        },
        filter: function() {},
        change_baseline: function() {},
        summarize_stats: function() {},
        updateData: function() {
            return false;
        },
        label: function(metric) {},
        fill: function(metric) {},
        hideLabel: function() {
            this.court.selectAll(".zone_label").attr("opacity", 0);
        },
        showLabel: function() {
            this.court.selectAll(".zone_label").attr("opacity", 1);
        },
        flipLabel: function(court, gz_selector, shotzone_selector) {
            court.selectAll(gz_selector).each(function(d, i) {
                // I don't know why, but choosing el.select rebinds the wrong data to shotzone, so do selectAll instead
                var el = d3.select(this), label = el.selectAll(shotzone_selector + "_label"), label_bbox = label[0][0].getBBox(), label2 = el.selectAll(shotzone_selector + "_label_sec"), label2_bbox = label2[0][0].getBBox();
                var label_cx = label_bbox.x + label_bbox.width / 2, label_cy = label_bbox.y + label_bbox.height / 2, label2_cx = label2_bbox.x + label2_bbox.width / 2, label2_cy = label2_bbox.y + label2_bbox.height / 2;
                label.transition().duration(500).attr("transform", "translate(" + label_translate + ",0)");
                label2.transition().duration(500).attr("transform", "translate(" + label2_translate + ",0)");
            });
        },
        repositionLabels: function(court, gz_selector, shotzone_selector, duration) {
            duration = typeof duration === "undefined" ? 500 : duration;
            var that = this;
            court.selectAll(gz_selector).each(function(d, i) {
                // I don't know why, but choosing el.select rebinds the wrong data to shotzone, so do selectAll instead
                var el = d3.select(this), shape = el.selectAll(shotzone_selector), shape_bbox = shape[0][0].getBBox();
                label = el.selectAll(shotzone_selector + "_label"), label_bbox = label[0][0].getBBox(), 
                label2 = el.selectAll(shotzone_selector + "_label_sec"), label2_bbox = label2[0][0].getBBox();
                var label_translate = shape_bbox.x + shape_bbox.width / 2 - label_bbox.x - label_bbox.width / 2, label2_translate = shape_bbox.x + shape_bbox.width / 2 - label2_bbox.x - label2_bbox.width / 2, label_cx = label_bbox.x + label_bbox.width / 2, label_cy = label_bbox.y + label_bbox.height / 2, label2_cx = label2_bbox.x + label2_bbox.width / 2, label2_cy = label2_bbox.y + label2_bbox.height / 2;
                var label_rotation = "", label2_rotation = "";
                if (that.courtobj.orientation == "defense") {
                    label_rotation = "rotate(180 " + label_cx + " " + label_cy + ")";
                    label2_rotation = "rotate(180 " + label2_cx + " " + label2_cy + ")";
                }
                label.transition().duration(duration).attr("transform", "translate(" + label_translate + ",0) " + label_rotation);
                label2.transition().duration(duration).attr("transform", "translate(" + label2_translate + ",0) " + label2_rotation);
            });
        }
    };
});

define("court/court/1.0.0/ZoneHelper-debug", [], function(require, exports, module) {
    var ZoneHelper = {
        _fillMissingZones: function(shots) {
            for (idx = 1; idx <= 14; idx++) {
                if (shots.length < idx || shots[idx - 1].key != idx) {
                    shots.splice(idx - 1, 0, {
                        key: idx,
                        value: 0,
                        made: 0,
                        points: 0,
                        id: "zone14_" + idx
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
                zone.id = "zone14_" + (parseInt(idx) + 1);
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
            court.selectAll(zone_class + "_label").data(data);
            court.selectAll(zone_class + "_label_sec").data(data);
            court.selectAll(zone_class).data(data);
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
        }
    };
});

define("court/court/1.0.0/color_helper-debug", [], function(require, exports, module) {});

define("court/court/1.0.0/ShotFilterCrossFilter-debug", [ "court/court/1.0.0/ShotFilter-debug" ], function(require, exports, module) {
    var ShotFilter = require("court/court/1.0.0/ShotFilter-debug");
    var ShotFilterCrossFilter = function(data) {
        this.data = data;
    };
    ShotFilterCrossFilter.prototype = new ShotFilter();
    ShotFilterCrossFilter.prototype.constructor = ShotFilterCrossFilter;
    ShotFilterCrossFilter.prototype.format_data = function(data, helper) {
        var shots_by_zone = data.group();
        var shots_made_by_zone = data.group();
        var shots_made = shots_made_by_zone.reduceSum(function(d) {
            return d.shm;
        });
        var zone_all = shots_by_zone.all();
        var zone_made = shots_made_by_zone.all();
        var all_zone_shots = helper._fillMissingZones(zone_all);
        var all_zone_shots = helper._appendMadeShots(zone_all, zone_made);
        return all_zone_shots;
    };
    ShotFilterCrossFilter.prototype.get_shots = function(data) {
        return data.group().all();
    };
});

define("court/court/1.0.0/ShotFilter-debug", [], function(require, exports, module) {
    var ShotFilter = function(data) {
        this.data = data;
    };
    ShotFilter.prototype = {
        filter: function() {}
    };
});
