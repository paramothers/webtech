var frameModule = require('ui/frame');

function onTab(){

    let naviationEntry = {

        moduleName: "views/about/about",
        transition:{
            name: "fade"
        }
    };
    frameModule.topmost().navigate(naviationEntry);
}
exports.onTab = onTab;
