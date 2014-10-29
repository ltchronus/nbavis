define(function(require, exports, module) {

    var json2echart_data;

    json2echart_data = function(jsonData) {
        this._jsonData = jsonData || '';
        this._data = {};
    }

    function dataString2Int(str) {
        var sec = 0,
            item = [];
        if (str) {
            item = str.split(":");
            for (var i = 0, l = item.length; i < l; i++) {
                item[i] = +item[i];
                sec = sec * 60 + item[i];
            }

        }
        return sec;
    }


    function getScore( end){
        return end.name.indexOf("Made")>=0?true:false;
    }

    json2echart_data.prototype.getData = function() {
        if (!this._jsonData) {
            return null;
        }
        this._jsonData = this._jsonData.game;
        this._data['@home_team'] = this._jsonData['home-team'];
        this._data['@away_team'] = this._jsonData['away-team'];
        this._data['@possessions'] = []; //每次比赛的possession
        //每次比赛event类型数据
        this._data['@events'] = [
            "Drive", "Block", "Dead Ball", "Defensive Rebound", "End of Game", "End of Period",
            "Foul", "Jump Ball", "Made Free Throw", "Made Shot", "Missed Free Throw",
            "Missed Shot", "Offensive Rebound", "Steal", "Timeout", "Turnover"
        ];
        this._data['category'] = [];

        // var  possession =  '';
        var home_id = 0, //主队的possession编号
            away_id = 0; //客队的possession编号

        for (var i = 0, l = this._jsonData.period.length; i < l; i++) { // 4四节比赛
            var possessions = this._jsonData.period[i].possession;
            for (var j = 0, m = possessions.length; j < m; j++) { //每节比赛的所有possession
                var possession = possessions[j]; //其中包括@team和events数据
                // console.log(i+',  ',j+',  ', possession['event'] );
                var data = [],
                    play = {};

                if (possession['event'] instanceof Array) {
                    for (var k = 0, n = possession.event.length; k < n; k++) {
                        var dataItem = {};
                        for (var key in possession.event[k]) {
                            if (key === "category") {
                                dataItem.name = possession.event[k][key];
                            } else {
                                dataItem[key] = possession.event[k][key];
                            }
                        }
                        dataItem.value = 3.00;
                        if (dataItem.name === "Drive") {
                          var tt = dataString2Int(dataItem.end_time) - dataString2Int(dataItem.time);
                          dataItem.value = tt.toFixed(2);
                        }
                        data.push(dataItem);
                    }
                } else {
                    var dataItem = {};
                    for (var key in possession.event) {
                        if (key === "category") {
                            dataItem.name = possession.event[key];
                        } else {
                            dataItem[key] = possession.event[key];
                        }
                    }
                    dataItem.value = 3.00;
                    if (dataItem.name === "Drive") {
                          var tt = dataString2Int(dataItem.end_time) - dataString2Int(dataItem.time);
                          dataItem.value = tt.toFixed(2);
                    }
                    data.push(dataItem);
                }
                var name;
                if (possession['team'] === this._data['@home_team']) {
                    home_id++;
                    name = possession['team'] + home_id;
                } else if (possession['team'] === this._data['@away_team']) {
                    away_id++;
                    name = possession["team"] + away_id;
                }
                this._data['category'].push(name);
                play.name = name;
                play.type = "bar";
                play["stack"] = "总量";
                play.itemStyle = {
                    normal: {
                        label: {
                            show: false,
                            position: 'insideRight'
                        }
                    }
                };
                play.data = data;
                this._data['@possessions'].push(play);
            }
        }
        this._data["@fastBreak"] = [];
        for ( var i = 0, l = this._data["@possessions"].length; i < l; i++){
            var possession = this._data["@possessions"][i];
            var begin = possession.data[0],
                  end    = null;
            for( var j=1, m = possession.data.length; j < m; j++){
                end = possession.data[j];
                if( getScore(end)){
                    tim = dataString2Int( end.time) - dataString2Int( begin.time);
                    if( tim <= 8 ){
                        this._data["@fastBreak"].push(possession);
                        break;
                    }
                }
            }
        }
        return this._data;
    };

    module.exports = json2echart_data;

});