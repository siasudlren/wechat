const EXPRESS = require('express');
const MYSQL = require('mysql');

let app = new EXPRESS();
let pool = MYSQL.createPool({
    user: 'root'
});

app.listen(3001);