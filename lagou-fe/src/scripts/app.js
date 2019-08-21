// 这个app.js用来引入需要写入的js
const homeTpl = require('./views/index.html');
const positionTpl = require('./views/position.html');
const positionAddTpl = require('./views/position_add.html');
const positionUpdateTpl = require('./views/position_update.html');
// const positionAddTpl = require('');


// 默认 父级 显示的首页的内容
$('.content').html('home');

// 点击按钮事件
$('.sidebar-menu li[link]').click(function () {
    // 原版代码
    switch ($(this).attr('link')) {
        case "index.html":
            $(".content").html(homeTpl);
            break;
        case "position.html":
            // $(".content").html(positionTpl)
            positionTable();
            break;

            //如果我们有多个页面 可能需要 n个case 
        default:
            break;
    }

    /* // 优化代码:声明一个新map对象
    let map = new Map();
    // 传递键值对保存到map对象里去
    map.set('index.html', homeTpl);
    map.set('position.html', positionTpl);

    // 获取到点击的li的link属性对应的html内容
    $('.content').html(map.get($(this).attr('link'))); */
})

// 添加按钮
$('.content').on('click', '#addbtn', function () {
    $('.content').html(positionAddTpl);
})
// 返回按钮
$('.content').on('click', '#posback', function () {
    $('.content').html(positionTpl);
})
// 提交按钮，将前端form表单的数据发送给数据库（model）
$('.content').on('click', '#possubmit', function () {
    let from = $(this).attr('from');
    // 表单提交地址
    let url = from === "add"?'/api/position/add/':"/api/position/update/";
    // 提交的表单数据/内容,serialize()方法为序列表表格内容为字符串
    let data = $('#possave').serialize(); // 接收到的前端的数据
    $.ajax({
        url: url,
        type: 'post',
        data: data,
        success(result) {
            // ret是ejs模板里写的属性，表示result，有true和false两个值
            if (result.ret) {
                positionTable();    // 插入/更新数据成功后跳转首页
            } else {
                alert('失败');
                console.log(result);
            }
        }
    })
})

//编辑按钮  
$(".content").on("click",".pos-edit",function(){
    let posid = $(this).attr("posid")
    $.ajax({
        url:"/api/position/"+posid,
        dataType:"json",
        success(result){
            var html = template.render(positionUpdateTpl,{
                data:result.data
            })

            $(".content").html(html)
        }
    })
});

// 删除按钮
$(".content").on("click",".pos-remove",function(){
    
    let posid = $(this).attr("posid")
    $.ajax({
        url:"/api/position/delete",
        type:"delete",
        data:{
            id:posid
        },
        success(result){
            if(result.ret){
                positionTable()
            }else{
                alert("删除失败")
            }
        }
    })
});

// 搜索按钮
//全文搜索 按钮 
$(".content").on("click","#possearch",function(){
    let keywords = $("input[name='pos_search']").val()
    $.ajax({
        url:"/api/position/query/",
        type:"post",
        data:{
            keywords
        },
        success(result){
            if(result.ret){
                let html = template.render(positionTpl,{
                    data:result.data
                });
                $(".content").html(html);
            }else{
                alert("查询失败");
            }
        }
    })
});

// 显示职位信息
function positionTable() {
    $('.content').html(positionTpl);
    $.ajax({
        url: '/api/position/find',
        dataType: 'json', // 加了header头为json后可不用写此行
        success(result) {
            // 渲染到模板
            // console.log(result);
            // let trList = result.data.map((obj, index) => {
            //     return `
            //     <tr>
            //         <td>${index+1}</td>
            //         <td><img width="50" height="50"
            //                 src="https://www.lgstatic.com/i/image3/M00/12/AF/CgpOIFpu7ROAU0UaAAAvwWv_H_w082.jpg" alt="">
            //         </td>
            //         <td>${obj.companyName}</td>
            //         <td>${obj.positionName}</td>
            //         <td>${obj.city}</td>
            //         <td>${obj.creatTime}</td>
            //         <td>${obj.salary}</td>
            //         <td>
            //             <button class="btn btn-sm btn-primary pos-edit" posid="{{$value._id}}"><span
            //                     class="fa fa-edit"></span> 修改</button>
            //             <button class="btn btn-sm btn-danger pos-remove" posid="{{$value._id}}"
            //                 filename="{{$value.companyLogo}}"><span class="fa fa-remove"></span> 删除</button>
            //         </td>
            //     </tr>
            //     `
            // });
            
            // $('.table_first_tr').after(trList);

            // 用arttemplate来渲染html页面/需要确保已经在html里加载了template-web.js
            var html = template.render(positionTpl, {
                data:result.data       // 渲染的内容来自ajax向服务器的请求
            })
            $('.content').html(html);
        }
    })
}