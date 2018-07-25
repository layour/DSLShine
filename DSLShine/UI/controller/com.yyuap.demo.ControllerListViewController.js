//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerListViewController');
com.yyuap.demo.ControllerListViewController = function() {
    com.yyuap.demo.ControllerListViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerListViewController$initialize(){
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
    
function com$yyuap$demo$ControllerListViewController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
var i = 0;
var len = 20;
function com$yyuap$demo$ControllerListViewController$listload(sender, args){
	$id("listviewdefine0").set("visibleLoadMore","true");
	var json = {persons:[]};
	for(i=0,len=20;i<len;i++){
		var person = {};
		person["id"] = "100"+i.toString();
		person["name"] = "联系人"+i.toString();
		person["icon"] = "lss.png";	
		json.persons.push(person);
	}
	$ctx.push(json);
}
function com$yyuap$demo$ControllerListViewController$rowclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	$alert("name:"+data.name);
	
	$alert("rowindex:"+$id("listviewdefine0").get("rowindex"));
    
    $alert("args.rowindex:"+$jsonToString(args));
}
function downrefersh(sender, args){
	var json = {persons:[]};
	for(len = (len+20); i<len;i++){
		var person = {};
		person["id"] = "100"+i.toString();
		person["name"] = "联系人"+i.toString();
		person["icon"] = "lss.png";
		json.persons.push(person);
	}
	$ctx.push(json);
}
function itemdelete(sender, args){
	var row = $id("listviewdefine0").get("row");
	delteRow($stringToJSON(row));
}
function delteRow(row) {
	var sourceR = $ctx.getJSONArray("persons");
	for (var i = 0; i < sourceR.length; i++) {
		var group = sourceR[i];
		if(group.id == row.id){
		    sourceR.splice(i,1);
		    //sourceR.remove(i);
		    break;
		}
	}
	var json = {};
	json["persons"] = sourceR;
	$ctx.push(json);
}
function uprefersh(sender, args){
	if(i - 40 >= 0 ){
	    var json = {persons:[]};
	    for(i = (i - 40),len = (len-20); i>=0 && i<len;i++){
		    var person = {};
		    person["id"] = "100"+i.toString();
		    person["name"] = "联系人"+i.toString();
		    person["icon"] = "lss.png";
		    json.persons.push(person);
	    }
	    $ctx.push(json);
	}
}
function com$yyuap$demo$ControllerListViewController$backbtn_onclick(sender, args){
	$view.close();
}
com.yyuap.demo.ControllerListViewController.prototype = {
    backbtn_onclick : com$yyuap$demo$ControllerListViewController$backbtn_onclick,
    listload : com$yyuap$demo$ControllerListViewController$listload,
    rowclick : com$yyuap$demo$ControllerListViewController$rowclick,
    initialize : com$yyuap$demo$ControllerListViewController$initialize,
    evaljs : com$yyuap$demo$ControllerListViewController$evaljs
};
com.yyuap.demo.ControllerListViewController.registerClass('com.yyuap.demo.ControllerListViewController',UMP.UI.Mvc.Controller);
