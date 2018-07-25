//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutHttpViewController');
com.yyuap.demo.AboutHttpViewController = function() {
    com.yyuap.demo.AboutHttpViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$AboutHttpViewController$initialize(){
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
    
function com$yyuap$demo$AboutHttpViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$AboutHttpViewController$btn_back_onclick(sender, args){
	$view.close();
}
function getbtn_onclick(){
	$service.call("UMJS.showLoadingBar",{});
	var url = "http://www.dnetzj.com/httpclient/nethomersssearch";
	$id("textbox0").set("value",url);
	url = $id("textbox0").get("value");
	var json = $service.get({
		"url" : url,
		"callback" : function (){
			$service.call("UMJS.hideLoadingBar",{});
			var result = $ctx.param("result");//get和post的CallBack中获取返回结果都从result中获取
	
			//$alert("get请求的结果:" + result);
	
			result = $stringToJSON(result);//将字符串转换成JSON对象
			
			$alert("CountPage:" + result.CountPage);
			
			/*
			$alert("当前城市是"+result.weatherinfo.city+"\n"
			+"今天"+result.weatherinfo.date_y+" "+result.weatherinfo.week + "\n"
			+"温度"+result.weatherinfo.temp1+"\n"
			+"天气"+result.weatherinfo.weather1);//北京*/
		}
	});
}

function postbtn_onclick(){
	$service.call("UMJS.showLoadingBar",{});
	var url = "http://academy.yonyou.com/api/loginLx.ashx";
	$id("textbox0").set("value",url);
	var args = {};
	args["url"] = url; 
    args["data"] = {key:"6480-4230-27FD-8AA0",user:"apitest",pwd:"123456"};
    args["callback"] = "postCallback()";

	$service.post(args);
}
function postCallback(){
	$service.call("UMJS.hideLoadingBar",{});
	var result = $ctx.param("result");//get和post的CallBack中获取返回结果都从result中获取
	
	result = $stringToJSON(result);//将字符串转换成JSON对象
	
	if(result.status==false || result.status == "false"){
		alert("result.status == "+ result.status+"\n"
			+"result.errCode == "+ result.errCode+"\n"
			+"result.errMsg == " + result.errMsg);
		
	}else if(result.status==true || result.status == "true"){
		alert("result.status == "+ result.status+"\n"
		    +"result.userName == " + result.userName);
	}
}
com.yyuap.demo.AboutHttpViewController.prototype = {
    btn_back_onclick : com$yyuap$demo$AboutHttpViewController$btn_back_onclick,
    initialize : com$yyuap$demo$AboutHttpViewController$initialize,
    evaljs : com$yyuap$demo$AboutHttpViewController$evaljs
};
com.yyuap.demo.AboutHttpViewController.registerClass('com.yyuap.demo.AboutHttpViewController',UMP.UI.Mvc.Controller);
