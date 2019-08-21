const express = require('express');
const router = express.Router();

// 引入控制器
const positionController = require('../controllers/position');

// 实例化路由，get和post两种方法，写在这里不利于维护，要用MVC模式开发，因此要上面导入controllers（控制层）的模块
// router.get('/add', (req, res, next) => {
//     console.log('发布成功了');
//     res.send('hello world');// 相应内容
// });

// router.post('/add', (req, res, next) => {
//     console.log('发布成功了', req.body);    // 这个是在服务器的终端进行打印
//     res.send('hello world post');// 响应内容
// });

// 写一个中间件将上面导入的控制器拿来使用
router.post('/add', positionController.add);
router.get('/find', positionController.find);      // 查找数据库里的内容的路由，打开职业页面时调用此路由
router.get('/:id', positionController.findById);    // 修改数据调用此路由，根据按钮的id来查，按钮id对应数据库里的id
router.post("/update",positionController.update);   // 更新数据调用此路由
router.delete("/delete",positionController.remove);     // 删除数据用此路由
router.post("/query",positionController.query);         // 搜索功能用此路由


// 导出模块，可以让其他地方访问到里面的函数
module.exports = router;    