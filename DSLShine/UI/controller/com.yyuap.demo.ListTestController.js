//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yyuap.demo.ListTestController');
com.yyuap.demo.ListTestController = function() {
    com.yyuap.demo.ListTestController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ListTestController$initialize(){
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
    
function com$yyuap$demo$ListTestController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ListTestController$button0_onclick(sender, args){
	$view.close();
}
function com$yyuap$demo$ListTestController$listviewdefine0_onload(sender, args){
	
	var rightflipper = [ 
        {"halign":"center"
,"text-align":"right"
,"width":"70"
,"icon-width":"12"
,"istogglebutton":"false"
,"font-pressed-color":"#ffffff"
,"icon-height":"12"
,"height":"59"
,"color":"#ffffff"
,"layout-type":"linear"
,"background":"#FF615A"
,"font-size":"12"
,"icon-background-image":"audit_refuse.png"
,"value":"拒绝"
,"icon-pressed-image":"audit_refuse.png"
,"font-family":"default"
,"valign":"center"
,"checked":"false"
,"icon-text-spacing":"8"
},
       {"halign":"center"
,"text-align":"right"
,"width":"70"
,"icon-width":"12"
,"istogglebutton":"false"
,"font-pressed-color":"#ffffff"
,"icon-height":"12"
,"height":"59"
,"color":"#ffffff"
,"layout-type":"linear"
,"background":"#15AD64"
,"font-size":"12"
,"icon-background-image":"audit_agree.png"
,"value":"同意"
,"icon-pressed-image":"audit_agree.png"
,"font-family":"default"
,"valign":"center"
,"checked":"false"
,"icon-text-spacing":"8"
}];

$id("listviewdefine0").set("slidingitems",rightflipper);

var json = {listdetails:[]};
	
	for(var i = 0; i < 20; i++){
		var person = {};
		person["id"] = "100" + i;
		person["name"] = "温暖" + i;
		person["num"] = i*20;
		json.listdetails.push(person);
	}
	$ctx.push(json);
}
function com$yyuap$demo$ListTestController$itemclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	$alert("id:" + data.id + "\n" + "name:" + data.name); 
}
com.yyuap.demo.ListTestController.prototype = {
    itemclick : com$yyuap$demo$ListTestController$itemclick,
    listviewdefine0_onload : com$yyuap$demo$ListTestController$listviewdefine0_onload,
    button0_onclick : com$yyuap$demo$ListTestController$button0_onclick,
    initialize : com$yyuap$demo$ListTestController$initialize,
    evaljs : com$yyuap$demo$ListTestController$evaljs
};
com.yyuap.demo.ListTestController.registerClass('com.yyuap.demo.ListTestController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
