/**
 * Created by michael on 11.06.2015.
 */
///<reference path="../typings/nodeunit/nodeunit.d.ts" />
///<reference path="../typings/node/node.d.ts" />
///<reference path="../index.ts" />

import path = require("path");
import nodeunit = require("nodeunit");
import dkmWinCmd = require("index");

export var dkmWinCmd_test: nodeunit.ITestGroup= {

    setUp: function (callback: nodeunit.ICallbackFunction) {
        callback();
    },



    test_robocopy: function (test:nodeunit.Test) {
        var src = path.join(__dirname, "files", "src");
        var dst = path.join(__dirname, "files", "dst");
        var pars = ["robocopy", src, dst, "*.*", "/MIR"];
        var cmdLine = dkmWinCmd.joinAndDosQuote(pars);
        console.log(cmdLine);
        test.equals(cmdLine !=="",true);
        test.done();
    }
};

