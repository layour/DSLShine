//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerSlideviewController');
com.yyuap.demo.ControllerSlideviewController = function() {
    com.yyuap.demo.ControllerSlideviewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerSlideviewController$initialize(){
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
    
function com$yyuap$demo$ControllerSlideviewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ControllerSlideviewController$backbtn_onclick(sender, args){
    $view.close();
}
var isMenuOpen = false;
function openrightview(sender, args){
	if(isMenuOpen){
		$id("slidingviewdefine0").set("openrightview","false");
	}
	else{
		$id("slidingviewdefine0").set("openrightview","true");
	}
	
	isMenuOpen = !isMenuOpen;
}
function dataload(sender, args){
	var json = {
		listdetails:[{
			id:"id_debitcard",
			icon:"btn_fav.png",
			name:"借记卡开户",
			detail:"为客户快速有效的办理借记卡开户和开卡业务"
		},{
			id:"id_sign",
			icon:"btn_fav.png",
			name:"电子渠道签约",
			detail:"为客户进行快速便捷的电子渠道签约交易"
		},{
			id:"id_creditcard",
			icon:"btn_fav.png",
			name:"信用卡申请",
			detail:"快速便捷的为客户办理信用卡申请业务。"
		},{
			id:"id_management",
			icon:"btn_fav.png",
			name:"投资理财",
			detail:"为客户进行快速便捷的理财产品购买交易。"
		},{
			id:"id_customerinfor",
			icon:"btn_fav.png",
			name:"客户信息查看",
			detail:"查看客户信息、呼叫潜在客户办理业务"
		},{
			id:"id_customerinteraction",
			icon:"btn_fav.png",
			name:"客户互动",
			detail:"建立客户与业务人员的快捷互动渠道"
		}
		]
	};
	$ctx.push(json);
}
function itemclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	$alert("您点击的是:" + data.name);
}
function com$yyuap$demo$ControllerSlideviewController$slidingnoscroll(sender, args){
$id("slidingviewdefine0").set("disabled","false");
}
com.yyuap.demo.ControllerSlideviewController.prototype = {
    slidingnoscroll : com$yyuap$demo$ControllerSlideviewController$slidingnoscroll,
    backbtn_onclick : com$yyuap$demo$ControllerSlideviewController$backbtn_onclick,
    initialize : com$yyuap$demo$ControllerSlideviewController$initialize,
    evaljs : com$yyuap$demo$ControllerSlideviewController$evaljs
};
com.yyuap.demo.ControllerSlideviewController.registerClass('com.yyuap.demo.ControllerSlideviewController',UMP.UI.Mvc.Controller);
