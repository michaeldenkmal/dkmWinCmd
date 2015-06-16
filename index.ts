/**
 * Created by michael on 16.06.2015.
 */
/**
 * Created by michael on 11.06.2015.
 */
///<reference path="typings/node/node.d.ts" />
/*
 * Für Node Module muß eine Definitions Datei geschrieben werden
 * die Dann referenziert wird
 * */
///<reference path="dkmTsTypings/sync-exec.d.ts" />

export interface IExecOutput {
    stdout:string;
    stderr:string;
    status:number;
}

export function execCmd(cmdLine:string):IExecOutput {
    var exec = require("sync-exec");
    return <IExecOutput> exec(cmdLine);
}

function strStartsWith(str:string, search:string):boolean {
    return str.indexOf(search) ==0;
}

function strEndsWith(str:string, search:string):boolean {
    return str.indexOf(search) == str.length-1;
}

var quoteDosCmdParam= function (p:string ):string {

    //If strStartsWith(path, Chr(34)) Or strEndsWith(path, Chr(34)) Then
    if ( strStartsWith(p,'"') || strEndsWith(p,'"')) {
        return p;
    } else {
        //If InStr(path, " ") > 0 Then
        if(p.indexOf(" ") > -1) {
            //quoteDosCmdParam = Chr(34) + path + Chr(34)
            return '"' + p + '"';
        } else {
            //quoteDosCmdParam = path
            return p;
        }
    }
};


export function getDriveFromStartDir (startDir:string):string {
    if (startDir.length >0) {
        return startDir[0];
    }
    return "";
}

export function joinAndDosQuote (cmds:string[]):string {
    var newCmds:string[] = [];
    var i,l=cmds.length;
    for (i=0; i<l; i++) {
        newCmds[i] = quoteDosCmdParam(cmds[i]);
    }
    return newCmds.join(" ");
}

export function buildDosInterCmd (internCmdLines:string[]):string {
    var cmdParams =[];
    cmdParams.push("cmd");
    cmdParams.push("/c");

    var internCmdLine = internCmdLines.join(" && ");
    cmdParams.push('"' + internCmdLine + '"');
    return cmdParams.join(" ");
}


