//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ServiceViewController');
com.yyuap.demo.ServiceViewController = function() {
    com.yyuap.demo.ServiceViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ServiceViewController$initialize(){
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
    
function com$yyuap$demo$ServiceViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ServiceViewController$rowclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	if("id_view" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMViewTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_network" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_badge" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMBadgeTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_menu" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMMenuTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_device" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMDeviceTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_service" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMServiceTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_file" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMFileTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_sql" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMSQLiteTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_push" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMPushTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_share" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.WeixinTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}
}
function com$yyuap$demo$ServiceViewController$listload(sender, args){
	var json = {servicedetails:[{
		"id":"id_view",
		"name":"页面服务",
		"detail":"UMView"
	},{
		"id":"id_network",
		"name":"网络服务",
		"detail":"UMNetwork"
	},{
		"id":"id_menu",
		"name":"菜单服务",
		"detail":"UMMenu"
	},{
		"id":"id_badge",
		"name":"标记服务",
		"detail":"UMBadgeservice"
	},{
		"id":"id_device",
		"name":"设备服务",
		"detail":"UMDevice"
	},{
		"id":"id_service",
		"name":"服务器服务",
		"detail":"UMService"
	},{
		"id":"id_file",
		"name":"文件服务",
		"detail":"UMFile"
	},{
		"id":"id_sql",
		"name":"数据库服务",
		"detail":"UMSQLite"
	}/*,{
		"id":"id_push",
		"name":"消息推送服务",
		"detail":"UMPush"
	},{
		"id":"id_share",
		"name":"微信分享服务",
		"detail":"UMWXShare"
	}*/
	]};
	$ctx.push(json);
}
function back(sender, args){
	$view.close();
}
function com$yyuap$demo$ServiceViewController$back(sender, args){
$view.close();
}
com.yyuap.demo.ServiceViewController.prototype = {
    back : com$yyuap$demo$ServiceViewController$back,
    rowclick : com$yyuap$demo$ServiceViewController$rowclick,
    listload : com$yyuap$demo$ServiceViewController$listload,
    initialize : com$yyuap$demo$ServiceViewController$initialize,
    evaljs : com$yyuap$demo$ServiceViewController$evaljs
};
com.yyuap.demo.ServiceViewController.registerClass('com.yyuap.demo.ServiceViewController',UMP.UI.Mvc.Controller);
