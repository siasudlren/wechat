// 读取ip.data的数据
const FS = require('fs');
const PATH = require('path');

let path = PATH.join(__dirname, 'ip.data');
let eolRegex = process.platform === 'win32' ? /\r\n/ : /\n/;
FS.readFileSync(path, 'UTF-8')
    .split(eolRegex)
    .forEach(function (line) {
        console.log(line);
    });
