//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutTelViewController');
com.yyuap.demo.AboutTelViewController = function() {
    com.yyuap.demo.AboutTelViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$AboutTelViewController$initialize(){
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
    
function com$yyuap$demo$AboutTelViewController$evaljs(js){
    eval(js)
}
function back(){
	$view.close();
}
function com$yyuap$demo$AboutTelViewController$edit(){
	var telphonenum = $id("phonenumlabel").get("text");
	var mailbox = $id("mailboxlabel").get("text");
	var url = $id("weburllabel").get("text");
	
	var json = {
		"tel":telphonenum,
		"mail":mailbox,
		"web":url
	};
	$view.open({
		"viewid" : "com.yyuap.demo.AboutTelUpdateView",//目标页面（首字母大写）全名，
		"isKeep" : "true",//保留当前页面不关闭
		"data" : json,
		"callback" : function (){
			var data = $param.getJSONObject("newData");
			$id("phonenumlabel").set("text",data.tel);
			$id("mailboxlabel").set("text",data.mail);
			$id("weburllabel").set("text",data.web);
		}
	});
}

function sendMessage(){
	var telphonenum = $id("phonenumlabel").get("value");
	$tel.sendMsg({
		"tel" : telphonenum,//电话号码
		"body" : "你好，欢迎使用UAP Mobile"//短信内容
	});
}
function callPhone(){
	var telphonenum = $id("phonenumlabel").get("value");
	$tel.call(telphonenum);
}
function sendEmail(){
	var mailbox = $id("mailboxlabel").get("value");
	$tel.sendMail({
		"receive" : mailbox,//收件人
		"title" : "hello",//邮件主题
		"content" : "欢迎使用UAP Mobile"//邮件内容
	});
}
function openwebview(){
	var url = $id("weburllabel").get("value");
	$device.openWebView({
		"url" : url
	});
}
function com$yyuap$demo$AboutTelViewController$btn_back_onclick(sender, args){
	$view.close();
}
com.yyuap.demo.AboutTelViewController.prototype = {
    btn_back_onclick : com$yyuap$demo$AboutTelViewController$btn_back_onclick,
    edit : com$yyuap$demo$AboutTelViewController$edit,
    initialize : com$yyuap$demo$AboutTelViewController$initialize,
    evaljs : com$yyuap$demo$AboutTelViewController$evaljs
};
com.yyuap.demo.AboutTelViewController.registerClass('com.yyuap.demo.AboutTelViewController',UMP.UI.Mvc.Controller);
