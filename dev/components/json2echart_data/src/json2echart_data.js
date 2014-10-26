define(function(require, exports, module) {

  var json2echart_data;

  json2echart_data = function( jsonData){
  	this._jsonData = jsonData || '';
  	this._data = {};
  }

  json2echart_data.prototype.getData = function() {
  	this._jsonData = this._jsonData.game;
  	this._data['@home_team'] = this._jsonData['@home_team'];
  	this._data['@away_team'] = this._jsonData['@away_team'];
  	this._data['@possessions'] = []; //每次比赛的possession
  	//每次比赛event类型数据
  	this._data['@events'] = [
  		'twopointmiss',   'rebound',	'shootingfoul',	'freethrowmiss','freethrowmiss',
  		'twopointmade','turnover','threepointmiss','personalfoul','freethrowmade',
  		'offensivefoul','teamtimeout','threepointmade','technicalfoul'
  	]; 

    var  possession =  '';

    for( var i = 0, l = this._jsonData.period.length; i < l; i++){
      possession = this._jsonData.period[i].possession;
      for(var j = 0, m = possession.length; j < m; j++){
        
      }
    }

  	

  	return this._data;
  };

  module.exports = json2echart_data;

});
