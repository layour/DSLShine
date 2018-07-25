//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerLineChartController');
com.yyuap.demo.ControllerLineChartController = function() {
    com.yyuap.demo.ControllerLineChartController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerLineChartController$initialize(){
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
    
function com$yyuap$demo$ControllerLineChartController$evaljs(js){
    eval(js)
}
function linechartloaddata(sender, args){
	var datalist1 = [
        {
    		key:"09:21",
    	    value:"210"
    	},{
    		key:"09:22",
    	    value:"380"
    	},{
    		key:"09:23",
    	    value:"420",
    	},{
    		key:"09:24",
    	    value:"450"
    	},{
    		key:"09:25",
    	    value:"810"
    	},{
    		key:"09:26",
    	    value:"850"
    	},{
    		key:"09:27",
    	    value:"1010"
    	},{
    		key:"09:28",
    	    value:"1050"
    	}
    ];
    
    var datalist2 = [
        {
    		key:"09:21",
    	    value:"100"
    	},{
    		key:"09:22",
    	    value:"250"
    	},{
    		key:"09:23",
    	    value:"400",
    	},{
    		key:"09:24",
    	    value:"520"
    	},{
    		key:"09:25",
    	    value:"612"
    	},{
    		key:"09:26",
    	    value:"800"
    	},{
    		key:"09:27",
    	    value:"950"
    	},{
    		key:"09:28",
    	    value:"1234"
    	}
    ];
   
    var json={ 
    	"charViewData" : {
    		"ChartData" : [
    		    { 
		    		"data":datalist1, 
		    		"seriseName" : '2012', 
		    		"chartType" : 3 
		    	},
		    	{ 
		    		"data":datalist2, 
		    		"seriseName" : '2013', 
		    		"chartType" : 3 
		    	} 
		    ]
		}
    } ;
    $ctx.push(json);
}
function back(sender, args){
	$view.close();
}
function com$yyuap$demo$ControllerLineChartController$backbtn_onclick(sender, args){
	$view.close();
}
com.yyuap.demo.ControllerLineChartController.prototype = {
    backbtn_onclick : com$yyuap$demo$ControllerLineChartController$backbtn_onclick,
    initialize : com$yyuap$demo$ControllerLineChartController$initialize,
    evaljs : com$yyuap$demo$ControllerLineChartController$evaljs
};
com.yyuap.demo.ControllerLineChartController.registerClass('com.yyuap.demo.ControllerLineChartController',UMP.UI.Mvc.Controller);
