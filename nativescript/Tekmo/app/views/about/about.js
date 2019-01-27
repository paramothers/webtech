var frameModule = require('ui/frame');

function onTap(){
    frameModule.topmost().navigate("views/home/home");
}

exports.onTap =  onTap;