//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMSQLiteTestController');
com.yyuap.demo.UMSQLiteTestController = function() {
    com.yyuap.demo.UMSQLiteTestController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$UMSQLiteTestController$initialize(){
    //you can programing by $ctx API
    //get the context data through $ctx.get()
    //set the context data through $ctx.push(json)
    //set the field of the context through $ctx.put(fieldName, fieldValue)
    //get the parameter of the context through $ctx.param(parameterName)
    //Demo Code:
    //    var str = $ctx.getString();      //获取当前Context对应的字符串
    //    alert($ctx.getString())          //alert当前Context对应的字符串
    //    var json = $ctx.getJSONObject(); //获取当前Context，返回值为json
    //    json["x"] = "a";        //为当前json增加字段
    //    json["y"] = [];           //为当前json增加数组
    //    $ctx.push(json);            //设置context，并自动调用数据绑定
    //    
    //    put方法需手动调用databind()
    //    var x = $ctx.get("x");    //获取x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.databind();            //调用数据绑定才能将修改的字段绑定到控件上
    //    var p1 = $param.getString("p1");   //获取参数p2的值，返回一个字符串
    //    var p2 = $param.getJSONObject("p2");   //获取参数p3的值，返回一个JSON对象
    //    var p3 = $param.getJSONArray("p3");   //获取参数p1的值，返回一个数组
    
    //your initialize code below...
    
}
    
function com$yyuap$demo$UMSQLiteTestController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$UMSQLiteTestController$button0_onclick(sender, args){
	$view.close();
}
function select(){
	var queryKeyword = $id("search0").get("value");
	console.log("queryKeyword:" + queryKeyword);
	query_data(0, queryKeyword);
	/*var sql = "select * from person";
	if (queryKeyword) {
		sql += " where xclass like '%" + queryKeyword + "%'";
	}
	var param = {
		db : dbname,
		sql : sql,
		startIndex : 0, //pageIndex=页号，从0开始
		endIndex : 9	//pageSize=每页的记录数，从1开始
	}
	var data = $sqlite.query(param);
	
	var rs = {
		"list" : data
	}
	$ctx.push(rs);*/
}

function query_data(pageindex, queryKeyword) {
	var sql = "select * from person";
	if (queryKeyword) {
		sql += " where xclass like '%" + queryKeyword + "%'";
	}
	var param = {
		db : dbname,
		sql : sql,
		pageIndex : pageindex, //pageIndex=页号，从0开始
		pageSize : 100	//pageSize=每页的记录数，从1开始
	}
	var data = $sqlite.queryByPage(param);
	var rs = {
		"list" : data
	}
	$ctx.push(rs);
}

var time = 0, dxtime = 0;
var dx = ["北京大学 计算机科学与技术", "河北大学 机械自动化", "北京外国语学院", "山东大学 物理研究院"];
var xing = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "楚", "魏", "蒋", "沈", "韩", "杨"];

function insert() {
	eval("var ming=" + '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"');
	var num = Math.floor(Math.random() * (16));
	var sql = "INSERT INTO person (name, xclass) VALUES('" + xing[time] + ming + "','" + dx[dxtime] + "');";
	var param = {
		db : dbname,
		sql : sql
	}
	$sqlite.execSql(param);
	time++;
	dxtime++;
	if (time >= 16) {
		time = 0;
	}
	if (dxtime >= 4) {
		dxtime = 0;
	}
	query_data(0);
}
function clear(){
	var sql = "delete from person";
	var result = confirm("是否全部删除？");
	if (!result) {
		return;
	}
	var param = {
		db : dbname,
		sql : sql
	}
	$sqlite.execSql(param);
	query_data(0);
}

var dbname = "mydb";
////初始化本地数据库
function initDB() {
	var sql = "CREATE TABLE person (_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, xclass VARCHAR)";
	var param = {
		db : dbname,
		sql : sql
	}

	$sqlite.execSql(param);
}
function sqliteload(){
	var param = {
		db : dbname
	}
	if ($sqlite.exist(param)== "false") {
		initDB();
	}
}
com.yyuap.demo.UMSQLiteTestController.prototype = {
    button0_onclick : com$yyuap$demo$UMSQLiteTestController$button0_onclick,
    initialize : com$yyuap$demo$UMSQLiteTestController$initialize,
    evaljs : com$yyuap$demo$UMSQLiteTestController$evaljs
};
com.yyuap.demo.UMSQLiteTestController.registerClass('com.yyuap.demo.UMSQLiteTestController',UMP.UI.Mvc.Controller);
