// 读取ip.data的数据
const FS = require('fs');
const PATH = require('path');
const MYSQL = require('mysql');

let pool = MYSQL.createPool({
    user: 'root'
});

const SQL = 'INSERT INTO db.ip(min, max, loc) VALUE ?';
let path = PATH.join(__dirname, 'ip.data');
let eolRegex = process.platform === 'win32' ? /\r\n/ : /\n/;
let index = 0;
let array = [];
FS.readFileSync(path, 'UTF-8')
    .split(eolRegex)
    .forEach(function (line) {
        let min = line.split(/\s+/)[0];
        let max = line.split(/\s+/)[1];
        let loc = line.replace(min, '').replace(max, '').trim();
        array[index++] = [min, max, loc];
    });
pool.query(SQL, [array], (err, results) => {
    console.log(results.affectedRows); // 448443
});
