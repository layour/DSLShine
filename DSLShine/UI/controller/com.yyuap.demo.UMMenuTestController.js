//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMMenuTestController');
com.yyuap.demo.UMMenuTestController = function() {
    com.yyuap.demo.UMMenuTestController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$UMMenuTestController$initialize(){
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
    
function com$yyuap$demo$UMMenuTestController$evaljs(js){
    eval(js)
}
function back(){
	$view.close();
}
function opendropmenu(){
	$menu.openDropDownList({
		"controlid" : "panel2",//目标控件的id
		"dropDownListWidth" : "100",//菜单项的宽度
		"background":"#2e2e2e",
		//"background-image":"app.png",
        "color":"#ffffff",
        "font-size":"15",
        "halign":"center",  //right  center
        "split-color":"#eeeeee",
        //"margin-left":"10", 
		"panelstyle":"round-div",
		"border-color":"#d2d2d2",
		"showtype":"right",
		"dropItemsArray" : [{
			"id":"id_setting",
			"name" : "设置",//菜单项名称
			"action" : "menuaction()"//点击该菜单项时执行的JS方法
		},{
			"id":"id_edit",
			"name" : "编辑",//菜单项名称
			"action" : "menuaction()"//点击该菜单项时执行的JS方法 
		},{
			"id":"id_save",
			"name" : "保存",//菜单项名称
			"action" : "menuaction()"//点击该菜单项时执行的JS方法 
		}]
	});
}
function menuaction(sender,args){
	$alert("args:" + $jsonToString(args));
	$alert("点击了"+args.name);
}

function com$yyuap$demo$UMMenuTestController$button0_onclick(sender, args){
$view.close();
}
com.yyuap.demo.UMMenuTestController.prototype = {
    button0_onclick : com$yyuap$demo$UMMenuTestController$button0_onclick,
    initialize : com$yyuap$demo$UMMenuTestController$initialize,
    evaljs : com$yyuap$demo$UMMenuTestController$evaljs
};
com.yyuap.demo.UMMenuTestController.registerClass('com.yyuap.demo.UMMenuTestController',UMP.UI.Mvc.Controller);
