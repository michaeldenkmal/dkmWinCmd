/**
 * Created by michael on 16.06.2015.
 */
/**
 * Created by michael on 11.06.2015.
 */
///<reference path="typings/node/node.d.ts" />
/*
 * F�r Node Module mu� eine Definitions Datei geschrieben werden
 * die Dann referenziert wird
 * */
///<reference path="dkmTsTypings/sync-exec.d.ts" />
function execCmd(cmdLine) {
    var exec = require("sync-exec");
    return exec(cmdLine);
}
exports.execCmd = execCmd;
function strStartsWith(str, search) {
    return str.indexOf(search) == 0;
}
function strEndsWith(str, search) {
    return str.indexOf(search) == str.length - 1;
}
var quoteDosCmdParam = function (p) {
    //If strStartsWith(path, Chr(34)) Or strEndsWith(path, Chr(34)) Then
    if (strStartsWith(p, '"') || strEndsWith(p, '"')) {
        return p;
    }
    else {
        //If InStr(path, " ") > 0 Then
        if (p.indexOf(" ") > -1) {
            //quoteDosCmdParam = Chr(34) + path + Chr(34)
            return '"' + p + '"';
        }
        else {
            //quoteDosCmdParam = path
            return p;
        }
    }
};
function getDriveFromStartDir(startDir) {
    if (startDir.length > 0) {
        return startDir[0];
    }
    return "";
}
exports.getDriveFromStartDir = getDriveFromStartDir;
function joinAndDosQuote(cmds) {
    var newCmds = [];
    var i, l = cmds.length;
    for (i = 0; i < l; i++) {
        newCmds[i] = quoteDosCmdParam(cmds[i]);
    }
    return newCmds.join(" ");
}
exports.joinAndDosQuote = joinAndDosQuote;
function buildDosInterCmd(internCmdLines) {
    var cmdParams = [];
    cmdParams.push("cmd");
    cmdParams.push("/c");
    var internCmdLine = internCmdLines.join(" && ");
    cmdParams.push('"' + internCmdLine + '"');
    return cmdParams.join(" ");
}
exports.buildDosInterCmd = buildDosInterCmd;
//# sourceMappingURL=index.js.map