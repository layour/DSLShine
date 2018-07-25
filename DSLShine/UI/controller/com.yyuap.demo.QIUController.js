//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yyuap.demo.QIUController');
com.yyuap.demo.QIUController = function() {
    com.yyuap.demo.QIUController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$QIUController$initialize(){
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
    
function com$yyuap$demo$QIUController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$QIUController$button0_onclick(sender, args){
	$view.close();
}
function com$yyuap$demo$QIUController$button1_onclick(sender, args){
var obj = $id("panel2");
		var width = parseFloat(obj.get("width"));
		var height = parseFloat(obj.get("height"));
		var x = parseFloat(obj.get("left"));
		var y = parseFloat(obj.get("top"));
		var fromy = parseFloat($id("panel1").get("top")) + height;
		var toy = parseFloat($id("panel3").get("top")) - height;
		var temNum = 16;
		var x0 = width / 2;
		var x1 = 100;
		var x2 = 150;
		var x3 = 200;
		var x4 = 300;
		var step = 1;
		//初始速度
		var sa = -0.1;
		//水平方向加速度

		//S=vt-（at^2）/2

		var flag2 = false;
		var flag3 = false;
		var flag4 = false;
		var time = temNum;
		//y = a（x-h）2 + k
		setInterval(function() {
			var s = step * ((time) / 1000) + sa * 0.5 * ((time) / 1000) * ((time) / 1000)
			if (x <= x0)
			{
				var h = 0;
				var a = 0;
				var k = x0;
				gun(obj, a, h, k, x, y, time, s);
				x = x + s;
			}
			else if (x <= x1) {
				var k = 30;
				var h = 0;
				var a = 0.027;
				gun(obj, a, h, k, x, y, time, s);
				x = x + s;
				y = a * (x - h) * (x - h) + k;
			} else if (x >= x1 && x <= x3) {
				var h = 150;
				var k = 200;
				var a = 0.04;
				gun(obj, a, h, k, x, y, time, s);
				x = x + s;
				y = a * (x - h) * (x - h) + k;
			} else if (x >= x3 && x <= x4) {
				var h = 0;
				var a = 0;
				var k = x4;
				y = 300;
				gun(obj, a, h, k, x, y, time, s);
				x = x + s;
			}
			time = time + temNum;
		}, temNum);
	}

	function gun(obj, a, h, k, fromx, fromy, temNum, step) {
		var y = a * ((fromx + step) - h) * ((fromx + step) - h) + k;

		var animations = [{
			type : "translate", //移动类型
			duration : temNum, //毫秒，默认1000
			fromX : fromx, //int类型，leftMargin的大小
			toX : fromx + step, //int类型，leftMargin的大小
			fromY : fromy, //int类型，topMargin的大小
			toY : a * ((fromx + step) - h) * ((fromx + step) - h) + k, //int类型，topMargin的大小
			repeatCount : "0", //int类型，重复的次数
			style : "accelerate"
		}];
		obj.animate(animations);
	}

com.yyuap.demo.QIUController.prototype = {
	button0_onclick:com$yyuap$demo$QIUController$button0_onclick,
    button1_onclick:com$yyuap$demo$QIUController$button1_onclick,
    initialize : com$yyuap$demo$QIUController$initialize,
    evaljs : com$yyuap$demo$QIUController$evaljs
};
com.yyuap.demo.QIUController.registerClass('com.yyuap.demo.QIUController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
