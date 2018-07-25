//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMCallbackViewController');
com.yyuap.demo.UMCallbackViewController = function() {
    com.yyuap.demo.UMCallbackViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$UMCallbackViewController$initialize(){
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
    
function com$yyuap$demo$UMCallbackViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$UMCallbackViewController$dataload(sender, args){
	var mylist = $cache.read("mylist");
    if(!mylist){
	    var json = {persons:[]};
		for(var i=0,len=20;i<len;i++){
			var person = {};
			person["id"] = "1000"+i.toString();
			person["name"] = "联系人"+i.toString();
			person["phone"] = 1381122000+i;
			person["age"] = 20 + i;
			person["sex"] = i%2 ? "男":"女";
			person["email"] = "lss"+i+"@yonyou.com";
			person["image"] = "lss.png";
			json.persons.push(person);
		}
		$ctx.push(json);
	}else{
		$ctx.push($stringToJSON(mylist));
	}
}
function save(sender, args){
	$cache.write("mylist", $ctx.getJSONObject());
	$view.openDialog({
		message:"已保存修改",
		title:"确认", 
		style:"ok" 
	});
}
function com$yyuap$demo$UMCallbackViewController$rowclick(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.PersonDetails",
		"isKeep" : "true",
		"data" : $id("listviewdefine0").get("row"),
		"callback" : "mycallback()"
	});
}
function mycallback(){
	var data = $param.getJSONObject("newData");
	
	var json = $ctx.getJSONObject();
	for(var i=0,len = json.persons.length;i<len;i++){
		if(json.persons[i].id == data.id){
			json.persons[i] = data;
			break;
		}
	}
	$ctx.push(json);
}
function com$yyuap$demo$UMCallbackViewController$back(sender, args){
	$view.close();
}
com.yyuap.demo.UMCallbackViewController.prototype = {
    rowclick : com$yyuap$demo$UMCallbackViewController$rowclick,
    dataload : com$yyuap$demo$UMCallbackViewController$dataload,
    back : com$yyuap$demo$UMCallbackViewController$back,
    initialize : com$yyuap$demo$UMCallbackViewController$initialize,
    evaljs : com$yyuap$demo$UMCallbackViewController$evaljs
};
com.yyuap.demo.UMCallbackViewController.registerClass('com.yyuap.demo.UMCallbackViewController',UMP.UI.Mvc.Controller);
