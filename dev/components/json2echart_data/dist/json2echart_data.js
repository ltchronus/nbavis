define("undefinedjson2echart_data",[],function(a,b,c){var d;d=function(a){this._jsonData=a||"",this._data=null},d.prototype.getData=function(){return this._jsonData=this._jsonData.game,this._data["@home_team"]=this._jsonData["@home_team"],this._data["@away_team"]=this._jsonData["@away_team"],this._data["@possessions"]=[],this._data["@events"]=["twopointmiss","rebound","shootingfoul","freethrowmiss","freethrowmiss","twopointmade","turnover","threepointmiss","personalfoul","freethrowmade","offensivefoul","teamtimeout","threepointmade","technicalfoul"],this._data},c.exports=d});