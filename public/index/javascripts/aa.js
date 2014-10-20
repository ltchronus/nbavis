define(function(require, exports, module) {

  var aa = function () {

  };

  aa.prototype.traverseDFS = function (root){
    var result = [];
    if(root === undefined || root === null){
      return;
    }else if(root.children.length === 0 ){
      result.push(root);
    }else{
      var childs = root.children;
      for (var i = childs.length - 1; i >= 0; i--) {
        var tmp  = arguments.callee(childs[i]);
        if (tmp.length !== 0) {
          result = result.concat(tmp);
        }
      }
    }
    return result;
  };

  aa.prototype.traverseBFS = function(root) {
    var result = [];
    if (root === undefined || root === null) {
      return;
    }else{
      var que = [];
      var node;
      que.push(root);
      while(que.length !==0 ){
        node = que.shift();
        result.push(node);
        que = que.concat([].slice.call(node.children));
      }
      return result;
    }

  };

  module.exports = aa;
});