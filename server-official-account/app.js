const EXPRESS = require('express');
const WECHAT = require('wechat');
let app = new EXPRESS();

app.use(EXPRESS.query());

let config = {
    appid: 'wxe1c53da14bbdb7b9',
    token: 'weixin',
    encodingAESKey: 'EuxmUC2PnNHnRWl4pAByrhd0hufHVmn2X2gx5GaMCqO',
    checkSignature:true
};

app.use('/',WECHAT(config,(req,res)=>{
    let message = req.weixin;
    console.log(message.Content);
    let htmlUrl='HTML 文档: http://www.w3scholl.com.cn/html/index.asp';
    if(message.Content.includes('HTML')){
        res.reply(htmlUrl);
    }else{
        res.reply('收到')
    }

}));

app.listen(3000);