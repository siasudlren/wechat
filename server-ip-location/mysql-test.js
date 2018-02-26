const MYSQL=require('mysql');

let pool=MYSQL.createPool({
    user:'root'
});

const SQL='INSERT INTO db.ip(min, max, loc) VALUE ?';

let array=[
    ['1','2','beijing1'],
    ['3','4','beijing2'],
    ['5','6','beijing3'],
    ['7','8','beijing4']
]
pool.query(SQL,[array],(err,results)=>{

})