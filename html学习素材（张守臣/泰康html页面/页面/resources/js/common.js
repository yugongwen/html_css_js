var dev_domain="http://localhost:8080/tkh-o2o-web/";
var pro_domain="http://healthcare.taikang.com/";

var domain=dev_domain;

var interfaces={
	ticketList:domain+"ticketSources",
	getOneTicket:domain+"ticketSource/",
	ticketInfo:domain+"ticketSources/information/",
	orderCancel:domain+"ticketPools/cancel/",
	saveOrder:domain+"order/save",
	custGetRecord:domain+"cust/getRecord/",
	orderlist:domain+"orders/",
	orderInfo:domain+"orders/information/",
	bindInfo:domain+"cust/information/",
	checkbindstatus:domain+"cust/checkbindstatus",
};

var openid = getUrlParam("openid");//

function checkAuthInfo(openid,callback){
	$.get("",function(data){
		
	});
}

//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null)
		return unescape(r[2]);
	return null; //返回参数值
}
//获取是否绑定用户:true 代表已绑定;false 代表没有绑定
function isbinded(wechatId,openid,callback){
	
    $.ajax({	
	url : "http://localhost:8080/tkh-o2o-web/cust/information/222222/wejcd",
	async: false,
	type : "GET",
	data : {},
	dataType : "JSON",
	success : function(result) {
		alert("调用用户是否绑定成功！");
		debugger
		if (result != null) {
			//alert("已绑定！");
			 window.location.href="./"+callback;
			callback();
		}else
			{
			//alert("未绑定！");
			window.location.href="../../register.html";
			 window.location.href="./register.html";
			}
	},
	error : function() {
		alert("获取用户信息失败!");
	}
 });
}