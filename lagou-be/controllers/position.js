// 引入数据库/模型
const PositionModel = require('../models/position');
// 导入moment库来格式化时间
const moment = require('moment');

// 保存数据/添加数据方法
// 要用异步的的方法来接收数据库里的数据，因为保存数据到数据库是需要时间的，因此要用async来声明方法
const add = async (req,res,next)=>{
    // console.log('我现在在用post方法！',req.body);    // 打印在服务器上
    
    // res.send('post is me');     // 发送到前端/浏览器
    
    // 设置head头,响应给浏览器的数据就会成json对象
    res.setHeader('content-type','application/json;charset=UTF-8');
    // 格式化发送的时间节点
    req.body.createTime = moment().format('YYYY-MM-DD HH:mm');
    // 调用models里的方法
    const result = await PositionModel.save(req.body);
    console.log(result);    // 表示正在往数据库中进行插入，处于阻塞状态，解决方法：异步
    if(result) {
        // res.json({
        //     ret:true,
        //     data:{
        //         'message':'success'
        //     }
        // })
        // 若成功保存数据到数据库，则用引用的ejs模版来输出保存的数据,直接输入模版名称即可
        res.render('position_success.ejs', {
            // 将数据格式从json转换成string
            data:JSON.stringify({
                message:'success'
            })
        })
    } else {
        // res.json({
        //     ret:false,
        //     data:{
        //         'message':'fail'
        //     }
        // })
        res.render('position_fail.ejs', {
            data:JSON.stringify({
                message:'fail'
            })
        })
    }
        
}

// 查找方法
const find = async (req,res,next) => {
    let result = await PositionModel.find();
    res.render('position_success.ejs', {
        // 将数据格式从json转换成string
        data:JSON.stringify(result)
    });
}

// 根据id查找单个职位信息，来实现修改信息的页面
const findById = async (req,res,next) => {
    let result = await PositionModel.findById(req.params.id);     // req是前端发过来的请求信息
    res.render('position_success.ejs', {
        // 将数据格式从json转换成string
        data:JSON.stringify(result)
    });
}

// 更新数据
const update = async (req,res,next)=>{
    res.setHeader("content-type","application/json;charset=UTF-8") // 响应给浏览器 返回的是json类型的数据
    req.body.createTime = moment().format("YYYY-MM-DD HH:mm"); 
    let result = await PositionModel.save(req.body)
    if(result){
        res.render("position_success.ejs",{
            data:JSON.stringify({
                message:"success"
            })
        })
    }else{
        res.render("position_fail.ejs",{
            data:JSON.stringify({
                message:"false"
            })
        })
    }

}

// 删除数据
const remove = async (req,res,next)=>{
    res.setHeader("content-type","application/json;charset=UTF-8");
    let result = await PositionModel.remove(req.body.id);
    if(result){
        res.render("position_success.ejs",{
            data:JSON.stringify({
                message:"success"
            })
        })
    }else{
        res.render("position_fail.ejs",{
            data:JSON.stringify({
                message:"false"
            })
        })
    }
}

//全文查询方法
const query = async (req,res,next)=>{
    res.setHeader("content-type","application/json;charset=UTF-8");     // 需要设置头信息来确保响应数据是json格式 
    let result = await PositionModel.query(req.body.keywords);
    if(result){
        res.render("position_success.ejs",{
            data:JSON.stringify(result)
        })
    }else{
        res.render("position_fail.ejs",{
            data:JSON.stringify({
                message:"false"
            })
        })
    }
}

// 导出模块
module.exports = {
    add,
    find,
    findById,
    update,
    remove,
    query
}   