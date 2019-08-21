/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 这个app.js用来引入需要写入的js\r\nconst homeTpl = __webpack_require__(/*! ./views/index.html */ \"./src/scripts/views/index.html\");\r\nconst positionTpl = __webpack_require__(/*! ./views/position.html */ \"./src/scripts/views/position.html\");\r\nconst positionAddTpl = __webpack_require__(/*! ./views/position_add.html */ \"./src/scripts/views/position_add.html\");\r\nconst positionUpdateTpl = __webpack_require__(/*! ./views/position_update.html */ \"./src/scripts/views/position_update.html\");\r\n// const positionAddTpl = require('');\r\n\r\n\r\n// 默认 父级 显示的首页的内容\r\n$('.content').html('home');\r\n\r\n// 点击按钮事件\r\n$('.sidebar-menu li[link]').click(function () {\r\n    // 原版代码\r\n    switch ($(this).attr('link')) {\r\n        case \"index.html\":\r\n            $(\".content\").html(homeTpl);\r\n            break;\r\n        case \"position.html\":\r\n            // $(\".content\").html(positionTpl)\r\n            positionTable();\r\n            break;\r\n\r\n            //如果我们有多个页面 可能需要 n个case \r\n        default:\r\n            break;\r\n    }\r\n\r\n    /* // 优化代码:声明一个新map对象\r\n    let map = new Map();\r\n    // 传递键值对保存到map对象里去\r\n    map.set('index.html', homeTpl);\r\n    map.set('position.html', positionTpl);\r\n\r\n    // 获取到点击的li的link属性对应的html内容\r\n    $('.content').html(map.get($(this).attr('link'))); */\r\n})\r\n\r\n// 添加按钮\r\n$('.content').on('click', '#addbtn', function () {\r\n    $('.content').html(positionAddTpl);\r\n})\r\n// 返回按钮\r\n$('.content').on('click', '#posback', function () {\r\n    $('.content').html(positionTpl);\r\n})\r\n// 提交按钮，将前端form表单的数据发送给数据库（model）\r\n$('.content').on('click', '#possubmit', function () {\r\n    let from = $(this).attr('from');\r\n    // 表单提交地址\r\n    let url = from === \"add\"?'/api/position/add/':\"/api/position/update/\";\r\n    // 提交的表单数据/内容,serialize()方法为序列表表格内容为字符串\r\n    let data = $('#possave').serialize(); // 接收到的前端的数据\r\n    $.ajax({\r\n        url: url,\r\n        type: 'post',\r\n        data: data,\r\n        success(result) {\r\n            // ret是ejs模板里写的属性，表示result，有true和false两个值\r\n            if (result.ret) {\r\n                positionTable();    // 插入/更新数据成功后跳转首页\r\n            } else {\r\n                alert('失败');\r\n                console.log(result);\r\n            }\r\n        }\r\n    })\r\n})\r\n\r\n//编辑按钮  \r\n$(\".content\").on(\"click\",\".pos-edit\",function(){\r\n    let posid = $(this).attr(\"posid\")\r\n    $.ajax({\r\n        url:\"/api/position/\"+posid,\r\n        dataType:\"json\",\r\n        success(result){\r\n            var html = template.render(positionUpdateTpl,{\r\n                data:result.data\r\n            })\r\n\r\n            $(\".content\").html(html)\r\n        }\r\n    })\r\n});\r\n\r\n// 删除按钮\r\n$(\".content\").on(\"click\",\".pos-remove\",function(){\r\n    \r\n    let posid = $(this).attr(\"posid\")\r\n    $.ajax({\r\n        url:\"/api/position/delete\",\r\n        type:\"delete\",\r\n        data:{\r\n            id:posid\r\n        },\r\n        success(result){\r\n            if(result.ret){\r\n                positionTable()\r\n            }else{\r\n                alert(\"删除失败\")\r\n            }\r\n        }\r\n    })\r\n});\r\n\r\n// 搜索按钮\r\n//全文搜索 按钮 \r\n$(\".content\").on(\"click\",\"#possearch\",function(){\r\n    let keywords = $(\"input[name='pos_search']\").val()\r\n    $.ajax({\r\n        url:\"/api/position/query/\",\r\n        type:\"post\",\r\n        data:{\r\n            keywords\r\n        },\r\n        success(result){\r\n            if(result.ret){\r\n                let html = template.render(positionTpl,{\r\n                    data:result.data\r\n                });\r\n                $(\".content\").html(html);\r\n            }else{\r\n                alert(\"查询失败\");\r\n            }\r\n        }\r\n    })\r\n});\r\n\r\n// 显示职位信息\r\nfunction positionTable() {\r\n    $('.content').html(positionTpl);\r\n    $.ajax({\r\n        url: '/api/position/find',\r\n        dataType: 'json', // 加了header头为json后可不用写此行\r\n        success(result) {\r\n            // 渲染到模板\r\n            // console.log(result);\r\n            // let trList = result.data.map((obj, index) => {\r\n            //     return `\r\n            //     <tr>\r\n            //         <td>${index+1}</td>\r\n            //         <td><img width=\"50\" height=\"50\"\r\n            //                 src=\"https://www.lgstatic.com/i/image3/M00/12/AF/CgpOIFpu7ROAU0UaAAAvwWv_H_w082.jpg\" alt=\"\">\r\n            //         </td>\r\n            //         <td>${obj.companyName}</td>\r\n            //         <td>${obj.positionName}</td>\r\n            //         <td>${obj.city}</td>\r\n            //         <td>${obj.creatTime}</td>\r\n            //         <td>${obj.salary}</td>\r\n            //         <td>\r\n            //             <button class=\"btn btn-sm btn-primary pos-edit\" posid=\"{{$value._id}}\"><span\r\n            //                     class=\"fa fa-edit\"></span> 修改</button>\r\n            //             <button class=\"btn btn-sm btn-danger pos-remove\" posid=\"{{$value._id}}\"\r\n            //                 filename=\"{{$value.companyLogo}}\"><span class=\"fa fa-remove\"></span> 删除</button>\r\n            //         </td>\r\n            //     </tr>\r\n            //     `\r\n            // });\r\n            \r\n            // $('.table_first_tr').after(trList);\r\n\r\n            // 用arttemplate来渲染html页面/需要确保已经在html里加载了template-web.js\r\n            var html = template.render(positionTpl, {\r\n                data:result.data       // 渲染的内容来自ajax向服务器的请求\r\n            })\r\n            $('.content').html(html);\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/views/index.html":
/*!**************************************!*\
  !*** ./src/scripts/views/index.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html><html lang=\\\"en\\\"><head>    <meta charset=\\\"UTF-8\\\">    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">    <title>首页</title></head><body>    welcome!</body></html>\"\n\n//# sourceURL=webpack:///./src/scripts/views/index.html?");

/***/ }),

/***/ "./src/scripts/views/position.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/position.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html><html lang=\\\"en\\\"><head>    <meta charset=\\\"UTF-8\\\">    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">    <title>职位</title></head><body>    <div class=\\\"box\\\">        <div class=\\\"box-header with-border\\\">            <h3 class=\\\"box-title\\\">                <button id=\\\"addbtn\\\" class=\\\"btn btn-block btn-success\\\"><span class=\\\"fa fa-plus\\\"></span> 添加</button>            </h3>            <div class=\\\"box-tools\\\">                <div class=\\\"input-group input-group-sm\\\" style=\\\"width: 150px;\\\">                    <input type=\\\"text\\\" value=\\\"\\\" name=\\\"pos_search\\\" class=\\\"form-control pull-right\\\" placeholder=\\\"搜索\\\">                    <div class=\\\"input-group-btn\\\">                        <button type=\\\"button\\\" id=\\\"possearch\\\" class=\\\"btn btn-default\\\"><i                                class=\\\"fa fa-search\\\"></i></button>                    </div>                </div>            </div>        </div>        <!-- /.box-header -->        <div class=\\\"box-body\\\">            <table class=\\\"table table-bordered\\\">                <tr>                    <th style=\\\"width: 10px\\\">#</th>                    <th>公司Logo</th>                    <th>公司名称</th>                    <th>职位名称</th>                    <th>工作地点</th>                    <th>发布时间</th>                    <th>岗位薪资</th>                    <th style=\\\"width: 140px\\\">操作</th>                </tr>                <!-- 用art-template进行预编译的语句 -->                {{each data}}                <tr>                    <td>{{$index+1}}</td>                    <td><img width=\\\"50\\\" height=\\\"50\\\"                            src=\\\"https://www.lgstatic.com/i/image3/M00/12/AF/CgpOIFpu7ROAU0UaAAAvwWv_H_w082.jpg\\\" alt=\\\"\\\">                    </td>                    <td>{{$value.companyName}}</td>                    <td>{{$value.positionName}}</td>                    <td>{{$value.city}}</td>                    <td>{{$value.createTime}}</td>                    <td>{{$value.salary}}</td>                    <td>                        <button class=\\\"btn btn-sm btn-primary pos-edit\\\" posid=\\\"{{$value._id}}\\\"><span                                class=\\\"fa fa-edit\\\"></span> 修改</button>                        <button class=\\\"btn btn-sm btn-danger pos-remove\\\" posid=\\\"{{$value._id}}\\\"                            filename=\\\"{{$value.companyLogo}}\\\"><span class=\\\"fa fa-remove\\\"></span> 删除</button>                    </td>                </tr>                {{ /each }}                <!-- <tr>            <td colspan=\\\"8\\\">暂无记录。</td>          </tr> -->            </table>        </div>    </div>    <!-- /.box --></body></html>\"\n\n//# sourceURL=webpack:///./src/scripts/views/position.html?");

/***/ }),

/***/ "./src/scripts/views/position_add.html":
/*!*********************************************!*\
  !*** ./src/scripts/views/position_add.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"box box-info\\\">    <div class=\\\"box-header with-border\\\">      <h3 class=\\\"box-title\\\">职位添加</h3>    </div>    <!-- /.box-header -->    <!-- form start -->    <form class=\\\"form-horizontal\\\" id=\\\"possave\\\" action=\\\"/api/position\\\" method=\\\"post\\\" enctype=\\\"multipart/form-data\\\">      <div class=\\\"box-body\\\">        <div class=\\\"form-group\\\">          <label for=\\\"companyLogo\\\" class=\\\"col-sm-2 control-label\\\">公司Logo</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"file\\\" class=\\\"form-control\\\" name=\\\"companyLogo\\\" id=\\\"companyLogo\\\" placeholder=\\\"请选择公司logo图片\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"companyName\\\" class=\\\"col-sm-2 control-label\\\">公司名称</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"companyName\\\" id=\\\"companyName\\\" placeholder=\\\"请输入公司名称\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"positionName\\\" class=\\\"col-sm-2 control-label\\\">职位名称</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"positionName\\\" id=\\\"positionName\\\" placeholder=\\\"请输入职位名称\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"city\\\" class=\\\"col-sm-2 control-label\\\">工作地点</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"city\\\" id=\\\"city\\\" placeholder=\\\"请输入工作地点\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"salary\\\" class=\\\"col-sm-2 control-label\\\">岗位薪资</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"salary\\\" id=\\\"salary\\\" placeholder=\\\"请输入岗位薪资\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"type\\\" class=\\\"col-sm-2 control-label\\\">工作性质</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"type\\\" id=\\\"type\\\" placeholder=\\\"请输入工作性质\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"experience\\\" class=\\\"col-sm-2 control-label\\\">工作经验</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"experience\\\" id=\\\"experience\\\" placeholder=\\\"请输入工作经验\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"degree\\\" class=\\\"col-sm-2 control-label\\\">学历要求</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"degree\\\" id=\\\"degree\\\" placeholder=\\\"请输入学历要求\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"description\\\" class=\\\"col-sm-2 control-label\\\">职位描述</label>            <div class=\\\"col-sm-10\\\">            <textarea rows=\\\"8\\\" cols=\\\"80\\\" name=\\\"description\\\" class=\\\"form-control\\\" id=\\\"description\\\" placeholder=\\\"请输入职位描述\\\"></textarea>          </div>        </div>      </div>      <!-- /.box-body -->      <div class=\\\"box-footer\\\">        <button type=\\\"button\\\" id=\\\"posback\\\" class=\\\"btn btn-default\\\">返回</button>        <button type=\\\"button\\\" from=\\\"update\\\"id=\\\"possubmit\\\" class=\\\"btn btn-info pull-right\\\">提交</button>      </div>      <!-- /.box-footer -->    </form>  </div>  \"\n\n//# sourceURL=webpack:///./src/scripts/views/position_add.html?");

/***/ }),

/***/ "./src/scripts/views/position_update.html":
/*!************************************************!*\
  !*** ./src/scripts/views/position_update.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"box box-info\\\">    <div class=\\\"box-header with-border\\\">      <h3 class=\\\"box-title\\\">职位更新</h3>    </div>    <!-- /.box-header -->    <!-- form start -->    <form class=\\\"form-horizontal\\\" id=\\\"possave\\\" action=\\\"/api/position\\\" method=\\\"post\\\" enctype=\\\"multipart/form-data\\\">      <input type=\\\"hidden\\\" value={{data._id}}>      <div class=\\\"box-body\\\">        <div class=\\\"form-group\\\">          <label for=\\\"companyLogo\\\" class=\\\"col-sm-2 control-label\\\">公司Logo</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"file\\\" class=\\\"form-control\\\" name=\\\"companyLogo\\\" id=\\\"companyLogo\\\" placeholder=\\\"请选择公司logo图片\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"companyName\\\" class=\\\"col-sm-2 control-label\\\">公司名称</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"companyName\\\" value=\\\"{{data.companyName}}\\\" id=\\\"companyName\\\" placeholder=\\\"请输入公司名称\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"positionName\\\" class=\\\"col-sm-2 control-label\\\">职位名称</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"positionName\\\" value=\\\"{{data.positionName}}\\\" id=\\\"positionName\\\" placeholder=\\\"请输入职位名称\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"city\\\" class=\\\"col-sm-2 control-label\\\">工作地点</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"city\\\" id=\\\"city\\\" value=\\\"{{data.city}}\\\" placeholder=\\\"请输入工作地点\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"salary\\\" class=\\\"col-sm-2 control-label\\\">岗位薪资</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"salary\\\" value=\\\"{{data.salary}}\\\" id=\\\"salary\\\" placeholder=\\\"请输入岗位薪资\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"type\\\" class=\\\"col-sm-2 control-label\\\">工作性质</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"type\\\" value=\\\"{{data.type}}\\\" id=\\\"type\\\" placeholder=\\\"请输入工作性质\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"experience\\\" class=\\\"col-sm-2 control-label\\\">工作经验</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"experience\\\" value=\\\"{{data.experience}}\\\" id=\\\"experience\\\" placeholder=\\\"请输入工作经验\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"degree\\\" class=\\\"col-sm-2 control-label\\\">学历要求</label>            <div class=\\\"col-sm-10\\\">            <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"degree\\\" value=\\\"{{data.degree}}\\\" id=\\\"degree\\\" placeholder=\\\"请输入学历要求\\\">          </div>        </div>        <div class=\\\"form-group\\\">          <label for=\\\"description\\\" class=\\\"col-sm-2 control-label\\\">职位描述</label>            <div class=\\\"col-sm-10\\\">            <textarea rows=\\\"8\\\" cols=\\\"80\\\" name=\\\"description\\\" class=\\\"form-control\\\" id=\\\"description\\\" placeholder=\\\"请输入职位描述\\\">{{data.description}}</textarea>          </div>        </div>      </div>      <!-- /.box-body -->      <div class=\\\"box-footer\\\">        <button type=\\\"button\\\" id=\\\"posback\\\" class=\\\"btn btn-default\\\">返回</button>        <button type=\\\"button\\\" from=\\\"add\\\" id=\\\"possubmit\\\" class=\\\"btn btn-info pull-right\\\">提交</button>      </div>      <!-- /.box-footer -->    </form>  </div>  \"\n\n//# sourceURL=webpack:///./src/scripts/views/position_update.html?");

/***/ })

/******/ });