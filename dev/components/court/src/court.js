define(function(require, exports, module) {

    /* Dependent on scrollTo jquery plugin*/
    var  ShotchartUi = require('./ShotchartUi');
    // var  ZoneHelper = require('./ZoneHelper');
    // var  color_helper = require('./color_helper');

    var stroke_color_shot = '#444';
    var stroke_color_courtitems = '#ccc';
    var fill_color_shot = '#555';


    param_shot_location = {
        'x': function(d) {
            return 250 + parseInt(d.x)
        },
        'y': function(d) {
            return parseInt(d.y)
        }
    };


    // New mediator: components: {court background, shot shapes (number/jersey,number/play count/,circle),gameflow,playbyplay,ui elements,players,score }

    var VORPED = {};

    VORPED.court = function(container_selector, obj_svg) {

        var court_svg = {};
        var container = {};
        var selector_container_svg = {};

        this.court_type = 'nba'; // nba, wnba, college-men, college-women, fiba, high-school

        var width = function(value) {
            if (typeof value !== 'undefined') {
                court_svg.attr("width", value);
            }
            return court_svg.attr("width");
        }

        var height = function(value) {
            if (typeof value !== 'undefined') {
                court_svg.attr("height", value);
            }
            return court_svg.attr("height");
        }

        this.container = {};
        this.draw = function(court_id, court_label_text) {
            this.config = {
                'div_container': '#chart',
                'svg': {
                    'width': 1145,
                    'height': 617,
                    'class': 'courts',
                    'id': court_id,
                    'viewBox': "0 0 1130 660",
                },
                'court_elements': {
                    'background': {
                        'x': 0,
                        'y': 0,
                        'width': 1128,
                        'height': 600,
                        'fill': '#e9b875'
                    },
                    'outline': {
                        'width': 1128,
                        'height': 600,
                        'fill': 'none',
                        'stroke': '#777',
                        'stroke-width': 1,
                        'class': 'halfcourt'
                    },
                    'label': {
                        'x': 20,
                        'y': 450,
                        'class': 'court_label',
                        'fill': '#999'
                    },
                    'markings': {
                        // 三分线
                        'threeptstr_left': {
                            type: 'path',
                            attrs: {
                                'd': 'M0 30 L169,30 A285 285 0 0 1 169 570 L0 570Z',
                                'stroke': stroke_color_courtitems,
                                'fill': 'green',
                                'stroke-width': 4
                            }
                        },
                        'threeptstr_right': {
                            type: 'path',
                            attrs: {
                                'd': 'M1128 30 L959,30A285 285 0 0 0 959 570L1128 570Z ',
                                'stroke': stroke_color_courtitems,
                                'fill': 'green',
                                'stroke-width': 4
                            }
                        },

                        // 绘制限制区
                        'restricted_left': {
                            type: 'rect',
                            attrs: {
                                x: 0,
                                y: 204,
                                width: 226,
                                height: 192,
                                stroke: stroke_color_courtitems,
                                fill: 'rgba(255,0,0,.7)',
                                'stroke-width': 4
                            }
                        },
                        'restricted_right': {
                            type: 'rect',
                            attrs: {
                                x: 900,
                                y: 204,
                                width: 226,
                                height: 192,
                                stroke: stroke_color_courtitems,
                                fill: 'rgba(255,0,0,.7)',
                                'stroke-width': 4
                            }
                        },
                        // 绘制油漆区
                        'paintleft': {
                            type: 'rect',
                            attrs: {
                                x: 0,
                                y: 228,
                                width: 226,
                                height: 144,
                                stroke: stroke_color_courtitems,
                                fill: 'red',
                                'stroke-width': 4
                            }
                        },
                        'paintright': {
                            type: 'rect',
                            attrs: {
                                x: 900,
                                y: 228,
                                width: 226,
                                height: 144,
                                stroke: stroke_color_courtitems,
                                fill: 'red',
                                'stroke-width': 4
                            }
                        },



                        //绘制篮筐
                        'hoopleft': {
                            type: 'circle',
                            attrs: {
                                cx: 63,
                                cy: 300,
                                r: 9,
                                stroke: stroke_color_courtitems,
                                fill: 'white',
                                'stroke-width': 3
                            }
                        },
                        'hoopright': {
                            type: 'circle',
                            attrs: {
                                cx: 1064,
                                cy: 300,
                                r: 9,
                                stroke: stroke_color_courtitems,
                                fill: 'white',
                                'stroke-width': 3
                            }
                        },

                        // 绘制罚球区
                        'paint_circle_left': {
                            type: 'circle',
                            attrs: {
                                'cx': 226,
                                'cy': 300,
                                'r': 72,
                                'stroke': stroke_color_courtitems,
                                'fill': 'none',
                                'stroke-width': 4
                            }
                        },
                        'paint_circle_right': {
                            type: 'circle',
                            attrs: {
                                'cx': 900,
                                'cy': 300,
                                'r': 72,
                                'stroke': stroke_color_courtitems,
                                'fill': 'none',
                                'stroke-width': 4
                            }
                        },

                        // 半场线
                        'halfcourtline': {
                            type: 'path',
                            attrs: {
                                'd': 'M564 0L564 600',
                                'stroke': stroke_color_courtitems,
                                'fill': 'none',
                                'stroke-width': 4
                            }
                        },

                        'center_circle': {
                            type: 'circle',
                            attrs: {
                                'cx': 564,
                                'cy': 300,
                                'r': 72,
                                'stroke': stroke_color_courtitems,
                                'fill': 'green',
                                'stroke-width': 4
                            }
                        },

                        // 绘制篮板
                        // 'backboard':{type:'rect', attrs:{'x':220,'y':35,'width':60,'height':5}},
                        'backboard_left': {
                            type: 'rect',
                            attrs: {
                                'x': 40,
                                'y': 264,
                                'width': 5,
                                'height': 72
                            }
                        },
                        'backboard_right': {
                            type: 'rect',
                            attrs: {
                                'x': 1088,
                                'y': 264,
                                'width': 5,
                                'height': 72
                            }
                        }

                    }
                }
            }

            var choose_container_selector = typeof container_selector === 'undefined' ? this.config.div_container : container_selector;
            var choose_svg_selector = typeof svg_selector === 'undefined' ? this.config.div_container : container_selector;

            var svg = typeof obj_svg === 'undefined' ? d3.select(choose_container_selector).append("svg").attr(this.config.svg) : obj_svg;
            var container = svg.append("g").attr("class", "court_container").attr("transform", "translate(15,15)");
            var court = container.select("svg.courts");
            var court_label = container.append("text")
                .attr(this.config.court_elements.label)
                .attr("class", "court-label")
                .text(court_label_text);
            var background = container.append("rect")
                .attr(this.config.court_elements.background);

            // Court markings
            for (var key in this.config.court_elements.markings) {
                var item = this.config.court_elements.markings[key];
                container.append(item.type).attr(item.attrs);
            }
            var court_outline = container.append("rect").attr(this.config.court_elements.outline);

            court_svg = svg;
            selector_container_svg = choose_container_selector;
            this.container = container;

            return container;
        }

        this.width = function(value) {
            return width(value);
        }

        this.height = function(value) {
            return height(value);
        }
        this.orientation = 'offense';
        this.setOrientation = function(orientation) {
            this.orientation = orientation;
            this.flip();
        }
        this.getOrientation = function(orientation) {
            return this.orientation;
        }
        this.setCourtLabel = function(txt) {
            court_svg.select(".court-label").text(txt);
        }
        this.flip = function() {
            return court_svg.select(".court_container").attr("transform", "translate(15, 15) rotate(180 250 235)");
        }
        var autoResize = function() {
            //console.log(selector_container_svg);
            //console.log($(selector_container_svg).width());
            var page_container = $(selector_container_svg);
            var targetWidth = page_container.width() - 10;
            if (targetWidth < 600) {
                width(targetWidth);
                height(Math.round(targetWidth * 470 / 500));
            }
        }
        this.setResizeListener = function() {
            $(window).on("resize", autoResize);
            $(window).on("load", autoResize);
        }

        function drawCircles(data) {
            court_svg.selectAll(".inputted").remove();
            var circles = court_svg.selectAll(".inputted").data(data);

            circles.exit().remove();
            circles.enter().append("circle")
                .attr('class', 'inputted')
                .attr({
                    'r': 4,
                    'cx': function(d) {
                        return parseInt(d.x) + 250
                    },
                    'cy': function(d) {
                        return d.y
                    }
                })
                .attr({
                    'fill': 'none',
                    'stroke': 'red',
                    'stroke-width': 2
                });

            circles.transition().duration(400).attr('r', 10);
        }

        this.drawCircles = function(data) {
            drawCircles(data);
        }
        this.addInputListener = function(coordinate_listener) {
            var dc = drawCircles;
            court_svg.on("click", function(d) {
                coord = d3.mouse(this);
                coordinate_listener({
                    x: Math.round(coord[0] - 250),
                    y: Math.round(coord[1])
                });
            });

        }
    }
    
    module.exports = VORPED;

});