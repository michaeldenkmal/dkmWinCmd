/**
 * Created by michael on 11.06.2015.
 */
///<reference path="../typings/nodeunit/nodeunit.d.ts" />
///<reference path="../typings/node/node.d.ts" />
///<reference path="../index.ts" />
var path = require("path");
var dkmWinCmd = require("../index");
exports.dkmWinCmd_test = {
    setUp: function (callback) {
        callback();
    },
    test_robocopy: function (test) {
        var src = path.join(__dirname, "files", "src");
        var dst = path.join(__dirname, "files", "dst");
        var pars = ["robocopy", src, dst, "*.*", "/MIR"];
        var cmdLine = dkmWinCmd.joinAndDosQuote(pars);
        console.log(cmdLine);
        test.equals(cmdLine !== "", true);
        test.done();
    }
};
//# sourceMappingURL=dkmWinCmd_test.js.map