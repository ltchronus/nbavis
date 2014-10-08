define(function(require, exports, module) {

	var Zone14 = require('./Zone14');
	var ColorFillHelper = require('./ColorFillHelper');

	function appendMiniShotCharts(data, div_container, descriptor, href, titles, base_url) {
		var idx = 1;
		for (di in data) {
			var selector = 'shotchart_' + descriptor + idx;
			var si = di.replace(' ','-');

			$(div_container).append("<a href='" + base_url + "index.php/" + href + '/' + titles[di].permalink + "' class='" + selector + " link_shotchart span2'></a>");
			var cobj = new VORPED.court('.' + selector);

			var c = cobj.draw('court' + si,'');
			cobj.width(100);
			cobj.height(470*100/500);
			createMiniZones(cobj, data[di]);

			$("." + selector).append("<br />" + titles[di].name);

			idx = idx + 1;
		}
	}

	function createMiniZones(cobj, data) {

		var z = new Zone14(cobj, data, new ColorFillHelper());
		z.draw();
		z.show(0);
		z.filterobj = new ShotFilterEmpty(data);
		z.updateData();
		z.fill('fg', 0);
		z.label('fg');
		cobj.container.selectAll(".shotzone_14_labels").remove();
		cobj.container.selectAll(".shotzone_14_label_sec").remove();
	}


	var StatSummaryHelper = function(data){
		var obj = {};
		var data = data;
		var filterobj = new ShotFilterArray(data);
		obj.summarize = function(shots){
			shots_made = 0;
			points_made = 0;

			total_shots = shots.length;
			for (idx in shots) {
				shots_made += parseInt(shots[idx].shm);
				points_made += shots[idx].z <= 5 ? 3*parseInt(shots[idx].shm) : 2*parseInt(shots[idx].shm);
			}

			data = {};
			data.pps = Math.round(points_made*100/total_shots)/100;
			data.fg = Math.round(shots_made*1000/total_shots)/10;
			data.shot_count = total_shots;

			return data;
		};
		obj.filter = function(all_filters) {
			return filterobj.filter(all_filters);
		}

		return obj;
	};

	var UTILS = {};
	UTILS.appendMiniShotCharts = appendMiniShotCharts;
	UTILS.createMiniZones = createMiniZones;
	UTILS.StatSummaryHelper = StatSummaryHelper;

	module.exports = UTILS;

});
