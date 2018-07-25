//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yyuap.demo.Input_focusController');
com.yyuap.demo.Input_focusController = function() {
    com.yyuap.demo.Input_focusController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$Input_focusController$initialize(){
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
    
function com$yyuap$demo$Input_focusController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$Input_focusController$button2_onclick(sender, args){
	
	if(i%4 == 0){
		//$id("textbox0").insert("hello");
		$service.call("UMJS.insert", {id:"textbox0",content:"hello"}, false);
	}else if(i%4 == 1){
		//$id("number0").insert(0,"12344");
		$service.call("UMJS.insert", {id:"number0",content:"123", index:"0"}, false);
	}else if(i%4 == 2){
		//$id("email0").insert(3,"mobile");
		$service.call("UMJS.insert", {id:"email0",content:"hello", index:"3"}, false);
	}else{
		//$id("textbox1").insert(5,"mobile");
		var len = $id("textbox1").get("value").length + 2;
		$alert("len:" + len);
		$service.call("UMJS.insert", {id:"textbox1",content:"hello", index:len}, false);
	}
	i++;
	

}
function com$yyuap$demo$Input_focusController$button1_onclick(sender, args){
    
	//$id("textbox0").blur();
	$service.call("UMJS.blur", {id:"email0"}, false);
	
}
function com$yyuap$demo$Input_focusController$button3_onclick(sender, args){
	$view.close()
}
var i = 0;
function com$yyuap$demo$Input_focusController$button0_onclick(sender, args){
	
	//$id("textbox0").focus();
	$service.call("UMJS.focus", {id:"email0"}, false);
	
}
com.yyuap.demo.Input_focusController.prototype = {
    button0_onclick : com$yyuap$demo$Input_focusController$button0_onclick,
    button3_onclick : com$yyuap$demo$Input_focusController$button3_onclick,
    button1_onclick : com$yyuap$demo$Input_focusController$button1_onclick,
    button2_onclick : com$yyuap$demo$Input_focusController$button2_onclick,
    initialize : com$yyuap$demo$Input_focusController$initialize,
    evaljs : com$yyuap$demo$Input_focusController$evaljs
};
com.yyuap.demo.Input_focusController.registerClass('com.yyuap.demo.Input_focusController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
