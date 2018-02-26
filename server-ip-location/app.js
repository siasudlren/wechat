const EXPRESS = require('express');

const MYSQL = require('mysql');

let app = new EXPRESS();
let pool = MYSQL.createPool({
    user: 'root'
});
app.get('/',(req,res)=>{
    let ip =req.query.ip;
    const SQL='SELECT loc FROM db.ip WHERE INET_ATON(?) BETWEEN INET_ATON(min) AND INET_ATON(max)';
    pool.query(SQL,[ip],(err,results)=>{
        if(err) throw err ;
        if(results.length==1){
            let loc = results[0].loc;
            res.send({"status":"OK","loc":loc});
        }else{
            res.send({"status":"err"});
        }
    });
});

app.listen(3001);
