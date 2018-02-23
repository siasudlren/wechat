const EXPRESS = require('express');
const WECHAT = require('wechat');
let app = new EXPRESS();

let config = {
    appid: 'wxe1c53da14bbdb7b9',
    token: 'weixin',
    encodingAESKey: 'iRWyy5zxQNVMJHxkBgjHHmR3esLcLBTGWCwo5VItcEe'
};

app.use(EXPRESS.query());

app.get('/',WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    console.log(message);
}));

app.listen(3000);