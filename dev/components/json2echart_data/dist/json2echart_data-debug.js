define("undefinedjson2echart_data-debug", [], function(require, exports, module) {
    var json2echart_data;
    json2echart_data = function(jsonData) {
        this._jsonData = jsonData || "";
        this._data = null;
    };
    json2echart_data.prototype.getData = function() {
        // body...
        this._data = this._jsonData;
        return this._data;
    };
    module.exports = json2echart_data;
});
