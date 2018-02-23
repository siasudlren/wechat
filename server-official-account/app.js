const EXPRESS = require('express');
const WECHAT = require('wechat');
let app = new EXPRESS();

let config = {
    appid: 'wxe1c53da14bbdb7b9',
    token: 'weixin',
    encodingAESKey: 'NCcWLM24j36yyhiq88p4J3ACP5NcQrsdZMg4HhUgqhd',
    checkSignature:true
};

app.use(EXPRESS.query());

app.get('/',WECHAT(config,(req,res)=>{
    let message = req.weixin;
    console.log(message);
    res.reply('收到');
}));

app.listen(3000);