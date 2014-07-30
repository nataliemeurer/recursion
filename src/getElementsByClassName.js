// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var results = [];

    var search = function(newNode){
        if (newNode.hasChildNodes()){
            var children = newNode.children;
            for (var i = 0; i < children.length; i++) {
                if (children[i].classList.contains(className)==true){
                    results.push(children[i]);
                }
                if (children[i].hasChildNodes()){
                    search(children[i]);//recursively call
                }
            }
        }
    }
    search(document);//call the function
    return results;
};