const db = require('../utils/utils-mongodb');

// 创建集合约束/格式/规则
const positionSchema = db.Schema({
    city:{type:String,required:true},    // type表示字段数据类型，true代表字段必须写，
    salary:{type:String,required:true},
    type:{type:String,required:true},
    experience:{type:String,required:true},
    degree:{type:String,required:true},
    description:{type:String,required:true},
    companyName:{type:String,required:true},
    positionName:{type:String,required:true},
    createTime:{type:String,required:true}
});

// 设置集合的名称，这里集合的名称是Positions，positionSchema是这个集合的约束/规则
// person => people
const Position = db.model('Positions', positionSchema);

// 进行数据的插入,要用save方法 
const save = (data) => {
    // 实例化集合
    let position = new Position(data);
    return position.save()     // 返回的是一个promise对象，只有成功和失败两种情况，因为我们需要执行异步的插入操作
            // .then(result => true)
            .then(result=>{   // 若成功保存数据
                return true;
            })
            .catch(err=>{     // 若数据保存失败
                return false;
            })
}

// 查找功能
const find = () => {
    return Position.find({})
}

// 根据id查找,用于修改功能
const findById = id => {
    return Position.findById(id)        //  这里的 findById是mongoDB里自带的方法
}

// 更新数据
const findByIdAndUpdate = (data) =>{
    return Position.findByIdAndUpdate(data.id,data)
           .then(result=>{
               return true;
           })
           .catch(err=>{
            return false;
            })
}

// 删除数据
const remove = id =>{
    return Position.findByIdAndRemove(id)
    //delete from position where id=1
           .then(result=>true)
           .catch(err=>false)
}

// 全文搜索
const query = keywords =>{
    return Position.find({
        positionName:new RegExp(keywords,'ig')
    })
}

// 导出模块
module.exports = {
    save,
    find,
    findById,
    findByIdAndUpdate,
    remove,
    query
}