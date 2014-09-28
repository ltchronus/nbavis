define(function(require, exports, module) {

    var $ = require('jquery');
    var d3 = require('d3');

    var NBASummary = function(options) {
        this.width = options.width;
        this.height = options.height;
        this.ele = options.ele;
    };


    NBASummary.prototype.init = function() {
        this.color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var radius = this.radius = this._getRadius();

        this.arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 150);
    };

    NBASummary.prototype._getRadius = function() {
        return Math.min(this.width, this.height) / 2;
    };

    NBASummary.prototype._getLayout = function() {
        var pie = d3.layout.pie().sort(null)
            .value(function(d) {
                return d.population;
            });
        return pie;
    };

    NBASummary.prototype.render = function() {
        var width = this.width;
        var height = this.height;
        var pie = this._getLayout();
        var arc =this.arc;
        var color =this.color;
        var svg = this.svg = d3.select(this.ele).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        d3.csv("public/data/data.csv", function(error, data) {

            data.forEach(function(d) {
                d.population = +d.population;
            });

            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) {
                    return color(d.data.age);
                });

            g.append("text")
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .text(function(d) {
                    return d.data.age;
                });


        });

    };


    NBASummary.prototype.event = function() {
      this.svg.on("mouseover", function(){
        if (d3.event.target.tagName === 'path') {
          // d3.event.target.style('fill','#ccc');
          console.log(111);
        }

      });
      // $('div.container').on('mouseenter' ,function() {
      //     console.log(111);
      // });
    };



    module.exports = NBASummary;

});
