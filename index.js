#! /usr/bin/env node
"use strict";
var fs = require('fs');
var cmd = require('node-cmd');
function getModuleStr(callback) {
    var fileDir = './node_modules';
    fs.readdir(fileDir, function(err, files) {
        if (err) {
            throw err;
        }
        var moduleStr = files.slice(1).join(' ');
        callback && callback(moduleStr);
    });
}

function deleteModules() {
    getModuleStr(function(moduleStr) {
        console.log(moduleStr);
        var cliStr = 'npm uni ' + moduleStr;
        cmd.get(cliStr, function(data){
                console.log('all nodemodules in package.json were deleted');
            }
        );       
    }); 
}

module.exports = {
    deleteModules: deleteModules
};

deleteModules()