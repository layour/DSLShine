//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerGroupListViewController');
com.yyuap.demo.ControllerGroupListViewController = function() {
    com.yyuap.demo.ControllerGroupListViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerGroupListViewController$initialize(){
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
    
function com$yyuap$demo$ControllerGroupListViewController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
function com$yyuap$demo$ControllerGroupListViewController$listviewdefine0_onload(sender, args){
    var json = {source:[{
    		title:"服务类",
			row : [{
				title : "页面服务"
			}, {
				title : "文件服务"
			}, {
				title : "数据库服务"
			}]
    	},{
    		title:"控件类",
			row : [{
				title : "音乐控件"
			}, {
				title : "视频控件"
			}, {
				title : "列表控件"
			}]
    	},{
    		title:"示例",
			row : [{
				title : "计算器"
			}, {
				title : "图库"
			}, {
				title : "塔防游戏"
			}]
    	}]
   };
   $ctx.push(json);
}
function com$yyuap$demo$ControllerGroupListViewController$rowclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	$alert("当前点击:" + data.title);
	
	$alert("args:"+$jsonToString(args));
}
function com$yyuap$demo$ControllerGroupListViewController$back(sender, args){
	$view.close();
}
com.yyuap.demo.ControllerGroupListViewController.prototype = {
    rowclick : com$yyuap$demo$ControllerGroupListViewController$rowclick,
    back : com$yyuap$demo$ControllerGroupListViewController$back,
    listviewdefine0_onload : com$yyuap$demo$ControllerGroupListViewController$listviewdefine0_onload,
    initialize : com$yyuap$demo$ControllerGroupListViewController$initialize,
    evaljs : com$yyuap$demo$ControllerGroupListViewController$evaljs
};
com.yyuap.demo.ControllerGroupListViewController.registerClass('com.yyuap.demo.ControllerGroupListViewController',UMP.UI.Mvc.Controller);
