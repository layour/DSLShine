//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yyuap.demo.DongHuaController');
com.yyuap.demo.DongHuaController = function() {
    com.yyuap.demo.DongHuaController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$DongHuaController$initialize(){
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
    
function com$yyuap$demo$DongHuaController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$DongHuaController$button0_onclick(sender, args){
	$view.close();
}
function com$yyuap$demo$DongHuaController$button12_onclick(sender, args){
	var obj = $id("button11");
		obj.set("width", "80");
		obj.set("height", "44");
		obj.set("top", "0");
		obj.set("left", "0");

		var p = $id("panel3");
		p.set("width", "40");
		p.set("height", "40");
		p.set("top", "160");
		p.set("left", "0");
		var p5 = $id("panel5");
		p5.set("width", "40");
		p5.set("height", "40");
		p5.set("top", "40");
		p5.set("left", "130");
}
var width2 = 300;
	var height2 = 300;
function com$yyuap$demo$DongHuaController$button1_onclick(sender, args){
	var width3 = parseInt($id("button11").get("width"));
		var height3 = parseInt($id("button11").get("height"));
		var animations = [{
			type : "translate", //移动类型,画面转换位置移动动画效果
			duration : 3000, //毫秒，默认1000
			fromX : 0, //int类型，leftMargin的大小
			toX : width2 - width3, //int类型，leftMargin的大小
			fromY : 0, //int类型，topMargin的大小
			toY : height2 - height3, //int类型，topMargin的大小
			repeatCount : "3", //int类型，重复的次数
			style : "accelerate"//加速
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button2_onclick(sender, args){
	var width3 = parseInt($id("button11").get("width"));
		var height3 = parseInt($id("button11").get("height"));
		var animations = [{
			type : "translate", //移动类型,画面转换位置移动动画效果
			duration : 3000, //毫秒，默认1000
			fromX : 0, //int类型，leftMargin的大小
			toX : width2 - width3, //int类型，leftMargin的大小
			fromY : 0, //int类型，topMargin的大小
			toY : height2 - height3, //int类型，topMargin的大小
			repeatCount : "3", //int类型，重复的次数
			style : "decelerate"//减速
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button3_onclick(sender, args){
	var animations = [{
			type : "alpha", //渐隐类型
			duration : 3000, //毫秒，默认1000
			fromAlpha : 0.3, //float类型，0-1，0为全透，1为完全不透
			toAlpha : 1, //float类型，0-1，0为全透，1为完全不透
			repeatCount : 2 ,//int类型，重复的次数
			style : "accelerate"//加速
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button4_onclick(sender, args){
	var width = parseInt($id("button11").get("width"));
		var height = parseInt($id("button11").get("height"));
		var x = parseInt($id("button11").get("left"));
		var y = parseInt($id("button11").get("top"));
		var animations = [{
			type : "scale", //渐变尺寸伸缩动画效果
			duration : 3000,
			fromWidth : width,
			toWidth : width * 2,
			fromHeight : height,
			toHeight : height * 2,
			pivotX : x + width / 2,
			pivotY : y + height / 2,
			style : "accelerate"//加速
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button5_onclick(sender, args){
	var animations = [{
			type : "translate", //移动类型
			duration : 3000, //毫秒，默认1000
			fromX : 50, //int类型，leftMargin的大小
			toX : 50, //int类型，leftMargin的大小
			fromY : 0, //int类型，topMargin的大小
			toY : 200, //int类型，topMargin的大小
			repeatCount : "3", //int类型，重复的次数
			style : "bounce"
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button6_onclick(sender, args){
	startgun($id("panel3"));
}
function startgun(obj) {
		var temNum = 16;
		var step = 0.1;
		obj.set("width", "40");
		obj.set("height", "40");
		obj.set("top", "160");
		obj.set("left", "0");
		var fromx = 0;
		var fromy = 160;
		var width = 40;
		var height = 40;
		//$alert("setInterval()");
		setInterval(function () {
			if (width > 100) {
				width = 40;
				height = 40;
				fromx = 0;
				fromy = 160;
				obj.set("width", "40");
				obj.set("height", "40");
				obj.set("top", "160");
				obj.set("left", "0");
			}
			guning(obj, fromx, fromy, width, height, temNum, temNum, step)
			width = width + step;
			height = height + step;
			fromx = fromx + step;
			fromy = fromy - step;
		}, temNum);
	}
	
	

	function guning(obj, fromx, fromy, width, height, temNum, step) {
		var animations = [{
			type : "translate", //移动类型
			duration : 1000, //毫秒，默认1000
			fromX : fromx, //int类型，leftMargin的大小
			toX : fromx + step, //int类型，leftMargin的大小
			fromY : fromy, //int类型，topMargin的大小
			toY : fromy - step, //int类型，topMargin的大小
			repeatCount : "0", //int类型，重复的次数
			style : "decelerate"
		}, {
			type : "scale", //渐变尺寸伸缩动画效果
			duration : 1000,
			fromWidth : width,
			toWidth : width + step,
			fromHeight : height,
			toHeight : height + step,
			pivotX : fromx ,//+ parseFloat(width / 2)
			pivotY : fromy ,//+ parseFloat(height / 2)
			style : "decelerate"//减速
		}];
		$id("panel3").animate(animations);
		$id("panel3").set("border-radius", parseFloat((width + step) / 2))
	}
function com$yyuap$demo$DongHuaController$button7_onclick(sender, args){
	var obj = $id("panel5");
		var line = $id("panel4");
		var fromx = parseFloat(obj.get("left"));
		var fromy = parseFloat(obj.get("top"));
		var height = parseFloat(obj.get("height"));
		var toy = parseFloat(line.get("top"));
		var animations = [{
			type : "translate", //移动类型
			duration : 3000, //毫秒，默认1000
			fromX : fromx, //int类型，leftMargin的大小
			toX : fromx, //int类型，leftMargin的大小
			fromY : fromy, //int类型，topMargin的大小
			toY : toy - height, //int类型，topMargin的大小
			repeatCount : "0", //int类型，重复的次数
			style : "bounce"
		}];
		$id("panel5").animate(animations);
}
function com$yyuap$demo$DongHuaController$button8_onclick(sender, args){
	var obj = $id("panel6");
		//var fromx = parseFloat(obj.get("left"));
		//var fromy = parseFloat(obj.get("top"));
		var height = parseFloat(obj.get("height"));
		var width = parseFloat(obj.get("width"));
		var temNum = 16;
		var step = 1;
		var line = $id("panel4");
		var toy = parseFloat(line.get("top"));
		var fromx = parseFloat(obj.get("left"));
		var fromy = parseFloat(obj.get("top"));
		setInterval(function() {
			step = step + 0.1;
			if (toy <= fromy + height) {
				width = 40;
				height = 40;
				fromx = 0;
				fromy = 50;
				obj.set("top", "50");
				obj.set("left", "0");
				step = 1;
			} else {
				huxian(obj, fromx, fromy, width, height, temNum, temNum, step)
				fromx = fromx + step;
				var a = 0.011;
				var b = 50;
				fromy = (a * fromx * fromx + b);
			}
		}, temNum);
}

function huxian(obj, fromx, fromy, width, height, temNum, step) {
		var a = 0.011;
		var b = 50;
		var animations = [{
			type : "translate", //移动类型
			duration : 1000, //毫秒，默认1000
			fromX : fromx, //int类型，leftMargin的大小
			toX : fromx + step, //int类型，leftMargin的大小
			fromY : fromy, //int类型，topMargin的大小
			toY : (a * (fromx + step) * (fromx + step) + b), //int类型，topMargin的大小
			repeatCount : "0", //int类型，重复的次数
			style : "accelerate"
		}];
		$id("panel6").animate(animations);
	}
function com$yyuap$demo$DongHuaController$button9_onclick(sender, args){
	$view.open({
			"viewid" : "com.yyuap.demo.QIU", //目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction" : "left",
			"animation-time" : "1000", //动画持续时间，以毫秒为单位
			"animation-type" : "Fade"////淡入
		});
}
function com$yyuap$demo$DongHuaController$button16_onclick(sender, args){
	var animations = [{
		type:"rotate",
		fromDegrees:"300",
		toDegrees:"-360",
		pivotX:"10%",pivotY:"100%",
		duration:"5000",
		style : "accelerate"//减速
	}];
	$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button13_onclick(sender, args){
	var animations = [{
			type : "alpha", //渐隐类型
			duration : 3000, //毫秒，默认1000
			fromAlpha : 0.3, //float类型，0-1，0为全透，1为完全不透
			toAlpha : 1, //float类型，0-1，0为全透，1为完全不透
			repeatCount : 2 ,//int类型，重复的次数
			style : "decelerate"//减速
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button15_onclick(sender, args){
	var width = parseInt($id("button11").get("width"));
		var height = parseInt($id("button11").get("height"));
		var x = parseInt($id("button11").get("left"));
		var y = parseInt($id("button11").get("top"));
		var animations = [{
			type : "scale", //渐变尺寸伸缩动画效果
			duration : 3000,
			fromWidth : width,
			toWidth : width * 2,
			fromHeight : height,
			toHeight : height * 2,
			pivotX : x + width / 2,
			pivotY : y + height / 2,
			style : "decelerate"//减速
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button10_onclick(sender, args){
	var animations = [{
			type : "alpha", //渐隐类型
			duration : 3000, //毫秒，默认1000
			fromAlpha : 0.3, //float类型，0-1，0为全透，1为完全不透
			toAlpha : 1, //float类型，0-1，0为全透，1为完全不透
			repeatCount : 2 ,//int类型，重复的次数
			style : "bounce"//反弹
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button14_onclick(sender, args){
	var width = parseInt($id("button11").get("width"));
		var height = parseInt($id("button11").get("height"));
		var x = parseInt($id("button11").get("left"));
		var y = parseInt($id("button11").get("top"));
		var animations = [{
			type : "scale", //渐变尺寸伸缩动画效果
			duration : 3000,
			fromWidth : width,
			toWidth : width * 2,
			fromHeight : height,
			toHeight : height * 2,
			pivotX : x + width / 2,
			pivotY : y + height / 2,
			style : "bounce"//反弹
		}];
		$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button18_onclick(sender, args){
	var animations = [{
		type:"rotate",
		fromDegrees:"300",
		toDegrees:"-360",
		pivotX:"10%",pivotY:"100%",
		duration:"5000",
		style : "decelerate"//减速
	}];
	$id("button11").animate(animations);
}
function com$yyuap$demo$DongHuaController$button17_onclick(sender, args){
	var animations = [{
		type:"rotate",
		fromDegrees:"300",
		toDegrees:"-360",
		pivotX:"10%",pivotY:"100%",
		duration:"5000",
		style : "bounce"//减速
	}];
	$id("button11").animate(animations);
}
com.yyuap.demo.DongHuaController.prototype = {
    button17_onclick : com$yyuap$demo$DongHuaController$button17_onclick,
    button18_onclick : com$yyuap$demo$DongHuaController$button18_onclick,
    button14_onclick : com$yyuap$demo$DongHuaController$button14_onclick,
    button10_onclick : com$yyuap$demo$DongHuaController$button10_onclick,
    button15_onclick : com$yyuap$demo$DongHuaController$button15_onclick,
    button13_onclick : com$yyuap$demo$DongHuaController$button13_onclick,
    button16_onclick : com$yyuap$demo$DongHuaController$button16_onclick,
    button9_onclick : com$yyuap$demo$DongHuaController$button9_onclick,
    button8_onclick : com$yyuap$demo$DongHuaController$button8_onclick,
    button7_onclick : com$yyuap$demo$DongHuaController$button7_onclick,
    button6_onclick : com$yyuap$demo$DongHuaController$button6_onclick,
    button5_onclick : com$yyuap$demo$DongHuaController$button5_onclick,
    button4_onclick : com$yyuap$demo$DongHuaController$button4_onclick,
    button3_onclick : com$yyuap$demo$DongHuaController$button3_onclick,
    button2_onclick : com$yyuap$demo$DongHuaController$button2_onclick,
    button1_onclick : com$yyuap$demo$DongHuaController$button1_onclick,
    button12_onclick : com$yyuap$demo$DongHuaController$button12_onclick,
    button0_onclick : com$yyuap$demo$DongHuaController$button0_onclick,
    initialize : com$yyuap$demo$DongHuaController$initialize,
    evaljs : com$yyuap$demo$DongHuaController$evaljs
};
com.yyuap.demo.DongHuaController.registerClass('com.yyuap.demo.DongHuaController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
