// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    if (typeof obj == "number" || obj === null || typeof obj == "boolean" || obj === undefined){
      return String(obj);
    }
    else if (typeof obj == "string"){
      return '"' + obj + '"';
    }
    else if (typeof obj == "object"){
        var result = [];
        if (Array.isArray(obj)){
            for(var i = 0; i < obj.length; i++){
                result.push(stringifyJSON(obj[i]));
            }
            return "[" + result.join(",") + "]";
        }
        else {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++){
          var addedString = '"' + keys[i] + '":';
          var keyVal = obj[keys[i]];
          if (typeof keyVal == "function" || keyVal === undefined){
            //do nothing
          }
          else{
            addedString = addedString + stringifyJSON(obj[keys[i]]);
            result.push(addedString);
            }
        }
          return "{" + result.join(",") + "}";
        }
    }
    else {
        return obj;
    }
};
