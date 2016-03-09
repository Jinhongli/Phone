$(function(){
	var week=["星期日","星期一","星期二","星期三",
	"星期四","星期五","星期六"];
	var h,m,month,day,weekday;
	$("#home").click(function(){
		$("#screen").find("iframe").remove();
		$("#time,#panel,#dock,#pages,.app-block").show();
		$("#screen").toggleClass("on");
		if($("#screen").hasClass("on")){
			$("#time,#panel,#dock,.app-block").show();
			var tic = setTimeout("freshTime()",50);
		}else{
			$("#time,#panel,#dock,.app-block").hide();
		}
	});
	$(".page").mousedown(function(evt){
		var x=0;
		var xx=0;
		evt.stopPropagation();
		if($("#screen").hasClass("on")){
			var x =evt.pageX;
			console.log(x);
			$(this).mouseup(function(event){
				var xx = event.pageX;
				console.log(xx);
				if(x-xx>40){
					$("#pages").animate({left:"-260px"},500);
					$(".active").next().fadeIn();
					$(".page").off("mousemove");
				}else if(xx-x>40){
					$("#pages").animate({left:"0px"},500);
					$(".active").prev().fadeIn();
				}
				else{
					x=0,xx=0;
					return
				}
			})
		}
	});
	$("#bg-black").click(function(){
		$("#phone").css("background-color","#2A2828");
		$("#buttons li").css("color","white");
	});
	$("#bg-white").click(function(){
		$("#phone").css("background-color","white");
		$("#buttons li").css("color","#2A2828");
	});
	$("#change-color button").click(function(){
		$("#change-color button").find("span").removeClass("glyphicon glyphicon-ok");
		$(this).find("span").addClass("glyphicon glyphicon-ok");
	});
	$("#weather").click(function(){
		$("#time,#panel,#dock,#pages,.app-block").hide();
		$("#screen").removeClass("on");
		$("#screen").append("<iframe src='http://3g.tianqi.cn/'></iframe>");
	});
	$("#back").click(function(){
		$("#screen").find("iframe").remove();
		$("#time,#panel,#dock,#pages,.app-block").show();
		$("#screen").toggleClass("on");
	})
})
function checkTime(t){
	if(t<10){
		return "0"+t;
	}else{
		return t;
	}
}
function freshTime(){
	var now = new Date();
	var week=["星期日","星期一","星期二","星期三",
	"星期四","星期五","星期六"];
	var h,m,month,day,weekday;
	h = now.getHours();
	m = now.getMinutes();
	month = now.getMonth()+1;
	date = now.getDate();
	weekday = " "+week[now.getDay()];
	$(".hour").html(checkTime(h));
	$(".minutes").html(checkTime(m));
	$(".month").html(month);
	$(".date").html(date);
	$(".weekday").html(weekday);
	tic = setTimeout("freshTime()",50);
}