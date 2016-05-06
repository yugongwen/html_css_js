/**
 * showTooltip--提示信息框
 * 
 * @param {Object} ts_content** 	提示信息
 * @param {Object} suc_fun** 	"确 认"，按钮后执行的方法
 * @param {Object} fali_fun 	"取消"，按钮后执行的方法
 * @param {Object} btn2Name** 	表示"确 认"含义按钮的名称
 * @param {Object} btn1Name  	表示"取消"含义按钮的名称
 */

function showConfirmDialog(ts_content, suc_fun, fali_fun, btn1Name, btn2Name){
	/*if(!btn1Name)btn1Name='取消';
	if(!btn2Name)btn2Name='确定';*/
	var btnHtml = "";
	if(btn1Name && btn2Name){
		btnHtml = "<span class='t_tooltip_lBtn'>"+btn1Name+"</span>"+
					  "<span class='t_tooltip_rBtn'>"+btn2Name+"</span>";
	}else if(btn1Name){
		btnHtml = "<span class='t_tooltip_cancel'>"+btn1Name+"</span>";
	}else if(btn2Name){
		btnHtml = "<span class='t_tooltip_ok'>"+btn2Name+"</span>";
	}
	
	if($('body').find("#box_tooltip").length>0){
		$('.t_tooltip .t_tooltip_content p').html(ts_content);
		$('.t_tooltip .t_tooltip_btn').empty().append(btnHtml);
	}else{
		var CDialogHtml=
			"<div id='box_tooltip' style='display: none;' >"+
				"<div class='t_mask' ></div>"+
				"<div class='t_tooltip' style='display: none;'>"+
					"<div class='t_tooltip_content'><p>" + ts_content + "</p></div>"+
					"<div class='t_tooltip_btn'>"+
						btnHtml +
					"</div>"+ 
				"</div>"+
			"</div>"
		$('body').append(CDialogHtml);
	}
	$("#box_tooltip,.t_tooltip").show();
	$('#box_tooltip .t_mask').click(function(){$('#box_tooltip,.t_tooltip').hide();});
	if(btn1Name && btn2Name){
		$('#box_tooltip .t_tooltip_rBtn').click(function(){
			$('#box_tooltip,.t_tooltip').hide();
			suc_fun();
		});
		$('#box_tooltip .t_tooltip_lBtn').click(function() {
			if (fali_fun)  fali_fun()
			else $('#box_tooltip,.t_tooltip').hide();
		});
	}else if(btn1Name){
		$('#box_tooltip .t_tooltip_cancel').click(function() {
			if (fali_fun)  fali_fun()
			else $('#box_tooltip,.t_tooltip').hide();
		});
	}else if(btn2Name){
		$('#box_tooltip .t_tooltip_ok').click(function(){
			$('#box_tooltip,.t_tooltip').hide();
			suc_fun()
		});
	}
}

/*信息提示弹出层效果
 * state: 状态  提交成功或者失败 value: success fail
 * content: 显示内容
 * btnName: 按钮显示内容
 * click_fun: 点击按钮后执行的事件
 *  
 *  */

function showMessDialog(state, content, btnName, click_fun) {
	var img = "",
		btnClass = "";
	if(state == "success"){
		img = "success.png";
		btnClass = "t_tooltip_ok";
	}else{
		img = "error.png";
		btnClass = "t_tooltip_error";
	}
		
	if($('body').find("#box_tooltip").length>0){
		$(".t_tooltip_content img").attr("src", "../resources/images/"+ img);
		$(".t_tooltip_content h5").text(content);
		$(".t_tooltip_btn span").attr("class", btnClass).html(btnName);
	}else{
		var dialogHtml = "<div id='box_tooltip' style='display: none;'>" +
						 "<div class='t_mask' ></div>" +
						 "<div class='t_tooltip'>" +
						 "<div class='t_tooltip_content'>" +
						 "<img src='../resources/images/"+ img +"' />" +
						 "<h5>" + content + "</h5>" +
						 "</div>" +
						 "<div class='t_tooltip_btn'>" +
						 "<span class='"+ btnClass +"'>"+ btnName +"</span>" +
						 "</div>" +
						 "</div></div>";
		$("body").append(dialogHtml);
	}
	$("#box_tooltip").show();
	$('.t_tooltip_btn span').click(function() {
		if (click_fun)  click_fun();
		else $("#box_tooltip").hide();
	});
	if(state == "success"){
		var sObj = $(".second"),
			s = sObj.text();
		setTime(sObj, s, click_fun);
	}
}

function setTime(obj, s, fun){
	if(s==0){
		fun();
	}else{
		obj.text(s);
		s--;
		setTimeout(function(){
			setTime(obj, s, fun);
		}, 1000);
	}
}
