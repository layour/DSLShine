//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgTimerViewController');
com.yyuap.demo.EgTimerViewController = function() {
    com.yyuap.demo.EgTimerViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$EgTimerViewController$initialize(){
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
    
function com$yyuap$demo$EgTimerViewController$evaljs(js){
    eval(js)
}
var time = 0;
var timeout;
function changeNumber(){
	$id("image1").set("src", "a"+parseInt(time/10)+".png");
	$id("image2").set("src", "a"+(time%10)+".png");
	time++;
	if(time > 99){
		time = 0;
	}
	timeout = setTimeout(changeNumber, 1000);
}
function back(sender, args){
	$view.close();
}
var flag = 5;
function changetimer(){
	//console.log("flag = " + flag);
	$id("image1").set("src", "a0.png");
	$id("image2").set("src", "a"+flag+".png");
	//$id("textbox0").set("value",flag);
	//alert("flag:"+flag);
	flag--;
	if(flag < 0){
		flag = 5;
		clearTimeout(timeout);
		var value = $id("textbox0").get("value");
		var today=new Date();
        var time=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
	    //$alert(time);
	    var params = {
			"sendTime" : time,
			"sendBody" : value,
			"icon": "app.png"
	    };
	    //$service.call("UMService.localNotification", params);
	    $device.notify(params);
	    return;
	}
	timeout = setTimeout(changetimer, 1000);
	
	
}
function timerbtn_onclick(sender, args){
	changetimer();
	/*var v = $id("timerbtn").get("value");
	
	if("开始" == v){
		changeNumber();
	    $id("timerbtn").set("value","停止");
	}else{
		clearTimeout(timeout);
		$id("timerbtn").set("value","开始");
	}*/
}
function com$yyuap$demo$EgTimerViewController$image0_onclick(sender, args){
$view.close();
}
function com$yyuap$demo$EgTimerViewController$timerbtn_onclick(sender, args){
	changetimer();
	//timeout = setInterval(changetimer, 1000);
}
com.yyuap.demo.EgTimerViewController.prototype = {
    timerbtn_onclick : com$yyuap$demo$EgTimerViewController$timerbtn_onclick,
    image0_onclick : com$yyuap$demo$EgTimerViewController$image0_onclick,
    initialize : com$yyuap$demo$EgTimerViewController$initialize,
    evaljs : com$yyuap$demo$EgTimerViewController$evaljs
};
com.yyuap.demo.EgTimerViewController.registerClass('com.yyuap.demo.EgTimerViewController',UMP.UI.Mvc.Controller);
