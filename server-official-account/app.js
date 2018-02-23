const EXPRESS = require('express');
const WECHAT = require('wechat');
const MYSQL= require('mysql');

let app = new EXPRESS();

app.use(EXPRESS.query());

let config = {
    appid: 'wxe1c53da14bbdb7b9',
    token: 'weixin',
    encodingAESKey: 'EuxmUC2PnNHnRWl4pAByrhd0hufHVmn2X2gx5GaMCqO',
    checkSignature:true
};
let pool = MYSQL.createPool({
    user:'root'
});

app.use('/',WECHAT(config,(req,res)=>{
    let message = req.weixin;
    let content=message.Content;
    console.log(content);
    // let htmlUrl='HTML 文档: http://www.w3scholl.com.cn/html/index.asp';
    // if(message.Content.includes('HTML')){
    //     res.reply(htmlUrl);
    // }else{
    //     res.reply({
    //         title:'文章标题',
    //         description:'文章描述信息',
    //         picurl:'',
    //         url:'http://biying.com'
    //     })
    // }
    let sql='SELECT * FROM db.chat WHERE question LIKE ?';
    pool.query(sql,[content],(err,results)=>{
        if(results.length===1){
            res.reply(results[0].answer);
        }else{
            res.reply('你在说什么,我听不懂...');
        }
    })

}));

app.listen(3000);