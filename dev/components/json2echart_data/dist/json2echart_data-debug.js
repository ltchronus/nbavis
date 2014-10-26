define("undefinedjson2echart_data-debug", [], function(require, exports, module) {
    var json2echart_data;
    json2echart_data = function(jsonData) {
        this._jsonData = jsonData || "";
        this._data = null;
    };
    json2echart_data.prototype.getData = function() {
        this._jsonData = this._jsonData.game;
        this._data["@home_team"] = this._jsonData["@home_team"];
        this._data["@away_team"] = this._jsonData["@away_team"];
        this._data["@possessions"] = [];
        //每次比赛的possession
        //每次比赛event类型数据
        this._data["@events"] = [ "twopointmiss", "rebound", "shootingfoul", "freethrowmiss", "freethrowmiss", "twopointmade", "turnover", "threepointmiss", "personalfoul", "freethrowmade", "offensivefoul", "teamtimeout", "threepointmade", "technicalfoul" ];
        var period_number = "";
        return this._data;
    };
    module.exports = json2echart_data;
});
