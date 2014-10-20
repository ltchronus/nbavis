define(function(require, exports, module) {

  var json2echart_data;

  json2echart_data = function( jsonData){
  	this._jsonData = jsonData || '';
  	this._data = null;
  }

  json2echart_data.prototype.getData = function() {
  	this._jsonData = this._jsonData.game;
  	this._data['@home_team'] = this._jsonData['@home_team'];
  	this._data['@away_team'] = this._jsonData['@away_team'];
  	this._data['@plays'] = []; //每次比赛的play数据
  	//每次比赛event类型数据
  	this._data['@events'] = [
  		'twopointmiss',   'rebound',	'shootingfoul',	'freethrowmiss'
  	]; 

  	return this._data;
  };

  module.exports = json2echart_data;

});
