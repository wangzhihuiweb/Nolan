

//window.onload=function(){
////	alert(11)
//	//开场动画
//	clearInterval(timer)
//	timer = setInterval(loadingFun, 40);
//}
function loadingFun(){	
	current++;
	$('.Start em').html(current + '%');
	$(".Start img:eq(0)").attr("src","images/loading/loading_top/loading_top_"+addPreZero(imgnum)+".png")
	$(".Start img:eq(1)").attr("src","images/loading/loading_front/loading_front_"+addPreZero(imgnum)+".png")
	$(".Start img:eq(2)").attr("src","images/loading/loading_back/loading_back_"+addPreZero(imgnum)+".png")
//	console.log(addPreZero(current))
	imgnum++;
	if(imgnum == 36 ){
		imgnum=0;
	}
	if(current == 100) {
		current = 0;
		clearInterval(timer);
		$(".Start").css("display","none");
		//进入盗梦空间
		$(".InceptionSpace").css("display","block");
		 audioid.play();
//		clearInterval(p1anton)
		timer=setInterval(spaceFun,40);
		
	}
}

//盗梦空间
function spaceFun(){
	$(".InceptionSpace img:eq(0)").attr("src","images/p1/inception_enter/inception_enter _"+addPreZero(current)+".jpg")
	current++;
	if(current == 85) {
		current = 0;
		clearInterval(timer);
		//
		$(".InceptionSpace").find("em").fadeIn(1000)
//		clearInterval(breathing)
		timer=setInterval(breathingfun,40)
	}
}
//p1微呼吸效果
function breathingfun(){
	$(".InceptionSpace img:eq(0)").attr("src","images/p1/inception_loop/inception_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;
	}
}
///点击进入星际穿越
function goP2(){
	$("#audio").attr("src","music/music.mp3");
	 audioid.play();
	$(".InceptionSpace").css("display","none");
	$(".Interstellar").css("display","block");
	clearInterval(timer)
	current = 0;
	timer=setInterval(p2fun,40)
}
function p2fun(){
	$(".Interstellar img:eq(0)").attr("src","images/p2/interstellar_enter/interstellar_enter_"+addPreZero(current)+".jpg")
	current++;
	if(current == 89) {
		current = 0;
		clearInterval(timer);
		//
		$(".Interstellar").find("em").fadeIn(1000)
//		clearInterval(breathing)
		timer=setInterval(breathingfun2,40)
	}
}
//p2微呼吸效果
function breathingfun2(){
//	console.log(current)
//	console.log(obj)
	$(".Interstellar img:eq(0)").attr("src","images/p2/interstellar_loop/interstellar_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;
	}
}



///点击进入蝙蝠侠
function goP3(){
	$("#audio").attr("src","music/music.mp3");
	 audioid.play();
	$(".Interstellar").css("display","none");
	$(".Batman").css("display","block");
	clearInterval(timer)
	current = 0;
	timer=setInterval(p3fun,40)
}
function p3fun(){
	$(".Batman img:eq(0)").attr("src","images/p3/batman_enter/batman_enter _"+addPreZero(current)+".jpg")
	current++;
	if(current == 106) {
		current = 0;
		clearInterval(timer);
		$(".Batman").find("em").fadeIn(1000)
		timer=setInterval(breathingfun3,40)
	}
}
//p3微呼吸效果
function breathingfun3(){
	$(".Batman img:eq(0)").attr("src","images/p3/batman_loop/batman_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 47) {
		current = 0;
	}
}



///点击进入记忆碎片
function goP4(){
	$("#audio").attr("src","music/music.mp3");
	 audioid.play();
	$(".Batman").css("display","none");
	$(".Memento").css("display","block");
	clearInterval(timer)
	current = 0;
	timer=setInterval(p4fun,40)
}
function p4fun(){
	$(".Memento img:eq(0)").attr("src","images/p4/memento_enter/memento_enter _"+addPreZero(current)+".jpg")
	current++;
	if(current == 104) {
		current = 0;
		clearInterval(timer);
		$(".Memento").find("em").fadeIn(1000)
		timer=setInterval(breathingfun4,40)
	}
}
//p4微呼吸效果
function breathingfun4(){
	$(".Memento img:eq(0)").attr("src","images/p4/memento_loop/memento_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;
	}
}





///点击进入敦刻尔克
function goP5(){
	$("#audio").attr("src","music/music.mp3");
	 audioid.play();
	$(".Memento").css("display","none");
	$(".Dunkirk").css("display","block");
	clearInterval(timer)
	current = 0;
	timer=setInterval(p5fun,40)
}
function p5fun(){
	$(".Dunkirk img:eq(0)").attr("src","images/p5/dunkirk_enter/dunkirk_enter_"+addPreZero(current)+".jpg")
	current++;
	if(current == 104) {
		current = 0;
		clearInterval(timer);
		$(".Dunkirk").find("em").fadeIn(1000)
		timer=setInterval(breathingfun5,40)
	}
}
//p5微呼吸效果
function breathingfun5(){
	$(".Dunkirk img:eq(0)").attr("src","images/p5/dunkirk_loop/dunkirk_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 47) {
		current = 0;
	}
}

///点击进入结尾
function goP6(){
	$("#audio").attr("src","music/music.mp3");
	 audioid.play();
	$(".Dunkirk").css("display","none");
	$(".End").css("display","block");
	clearInterval(timer)
	current = 0;
	$(".End").find("em").fadeIn(1000)
	timer=setInterval(p6fun,40)
}
function p6fun(){
	$(".End img:eq(0)").attr("src","images/End/ending_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;	
	}
}






function addPreZero(num){
 if(num<10){
  return '0000'+num;
 }else if(num<100){
  return '000'+num;
 }else if(num<1000){
  return '00'+num;
 }else{
  return num;
 }
}
