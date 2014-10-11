define(function(require, exports, module) {

	var d3 = require('d3');

	var ShotchartUi = function(courtobj, data) {
		this.courtobj = courtobj;
		this.court = {};
		this.selector = '';
		this.data = data;
	};

	ShotchartUi.prototype = {
		draw: function() {},
		show: function(transition_duration) {
			transition_duration = typeof transition_duration !== 'undefined' ? transition_duration : 1000;
			this.court.selectAll(this.selector)
			.transition().duration(transition_duration)
			.attr("opacity", 1);
			return this;
		},

		hide: function(transition_duration) {
			transition_duration = typeof transition_duration !== 'undefined' ? transition_duration : 1000;
			this.court.selectAll(this.selector)
			.transition().duration(transition_duration)
			.attr("opacity", 0);
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
			this.court.selectAll('.zone_label').attr('opacity', 0);
		},

		showLabel: function() {
			this.court.selectAll('.zone_label').attr('opacity', 1);
		},

		flipLabel: function(court, gz_selector, shotzone_selector) {
			court.selectAll(gz_selector).each(function(d, i) {
				// I don't know why, but choosing el.select rebinds the wrong data to shotzone, so do selectAll instead
				var el = d3.select(this),
				label = el.selectAll(shotzone_selector + "_label"),
				label_bbox = label[0][0].getBBox(),
				label2 = el.selectAll(shotzone_selector + "_label_sec"),
				label2_bbox = label2[0][0].getBBox();

				var label_cx = label_bbox.x + label_bbox.width / 2,
				label_cy = label_bbox.y + label_bbox.height / 2,
				label2_cx = label2_bbox.x + label2_bbox.width / 2,
				label2_cy = label2_bbox.y + label2_bbox.height / 2;

				label.transition().duration(500).attr("transform", "translate(" + label_translate + ",0)");
				label2.transition().duration(500).attr("transform", "translate(" + label2_translate + ",0)");
			});
		},

		repositionLabels: function(court, gz_selector, shotzone_selector, duration) {
			duration = typeof duration === 'undefined' ? 500 : duration;
			var that = this;
			court.selectAll(gz_selector).each(function(d, i) {
				// I don't know why, but choosing el.select rebinds the wrong data to shotzone, so do selectAll instead
				var el = d3.select(this),
				shape = el.selectAll(shotzone_selector),
				shape_bbox = shape[0][0].getBBox();
				label = el.selectAll(shotzone_selector + "_label"),
				label_bbox = label[0][0].getBBox(),
				label2 = el.selectAll(shotzone_selector + "_label_sec"),
				label2_bbox = label2[0][0].getBBox();

				var label_translate = shape_bbox.x + shape_bbox.width / 2 - label_bbox.x - label_bbox.width / 2,
				label2_translate = shape_bbox.x + shape_bbox.width / 2 - label2_bbox.x - label2_bbox.width / 2,
				label_cx = label_bbox.x + label_bbox.width / 2,
				label_cy = label_bbox.y + label_bbox.height / 2,
				label2_cx = label2_bbox.x + label2_bbox.width / 2,
				label2_cy = label2_bbox.y + label2_bbox.height / 2;

				var label_rotation = '',
				label2_rotation = '';
				if (that.courtobj.orientation == 'defense') {
				label_rotation = "rotate(180 " + label_cx + " " + label_cy + ")";
				label2_rotation = "rotate(180 " + label2_cx + " " + label2_cy + ")";
			}

			label.transition().duration(duration).attr("transform", "translate(" + label_translate + ",0) " + label_rotation);
			label2.transition().duration(duration).attr("transform", "translate(" + label2_translate + ",0) " + label2_rotation);
			});
		}
	};

	module.exports = ShotchartUi;

});