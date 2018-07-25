//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PersonDetailsController');
com.yyuap.demo.PersonDetailsController = function() {
    com.yyuap.demo.PersonDetailsController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$PersonDetailsController$initialize(){
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
    
function com$yyuap$demo$PersonDetailsController$evaljs(js){
    eval(js)
}
function dataload(sender, args){
	var json = $param.getJSONObject("data");
	$ctx.push(json);
}
function com$yyuap$demo$PersonDetailsController$back(sender, args){
	$ctx.dataCollect();
	/*$view.close({
		"resultCode" : "15",
		"newData": $ctx.getJSONObject()
	});*/
	$view.closeWithCallBack({
		"newData": $ctx.getJSONObject()
	});
}
com.yyuap.demo.PersonDetailsController.prototype = {
    back : com$yyuap$demo$PersonDetailsController$back,
    initialize : com$yyuap$demo$PersonDetailsController$initialize,
    evaljs : com$yyuap$demo$PersonDetailsController$evaljs
};
com.yyuap.demo.PersonDetailsController.registerClass('com.yyuap.demo.PersonDetailsController',UMP.UI.Mvc.Controller);
