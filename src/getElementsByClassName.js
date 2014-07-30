// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var results = [];

    var search = function(node){
        if (node.hasChildNodes()){

            var children = node.children;//getting all the children

            for (var i = 0; i < children.length; i++) {

                if (children[i].classList.contains(className)){
                    results.push(children[i]);//add children to results list if they have the class
                }

                if (children[i].hasChildNodes()){
                    search(children[i]);//recursive call
                }
            }
        }
    }
    search(document);//call the function
    return results;
};