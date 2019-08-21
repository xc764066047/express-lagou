// 连接数据库的文件
const mongoose = require('mongoose');

// 创建数据库的名称为lagous,27017为mongodb的端口号
mongoose.connect('mongodb://127.0.0.1:27017/lagous',
{useNewUrlParser: true});

module.exports = mongoose;