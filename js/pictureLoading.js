var timer=null;
var timer2=null;
var current=0;
var audioid=document.getElementById("audio");
var twoLoad=0;
window.onload = function () {
 //开始加载图片
	  picLoadingFun("imgdsanone","images/loading/loading_back/loading_back_", "png",37)
	  picLoadingFun("imgdsanone","images/loading/loading_front/loading_front_", "png",37)
	  picLoadingFun("imgdsanone","images/loading/loading_top/loading_top_", "png",36) 
	    var StartimgNum = $('.imgdsanone img').length;
	    var timer2 = setInterval(function(){
	        twoLoad++;
	        if (imgNum == 0)
	        {
	            if (twoLoad >= 100)
	            {
	            	twoLoad=100;	
	                clearInterval(timer2)
	            }
	            $('.Start em').html(twoLoad + "%");
	        }
	    },20)
        $('.imgdsanone img').load(function () {
        	if (!--StartimgNum) {         		
          		LoadRemainingPictures()
        	}
        })

}

///加载所以剩余图片
function LoadRemainingPictures(){
	picLoadingFun("imgdsanone2","images/End/ending_", "jpg",36) 
    picLoadingFun("imgdsanone2","images/p1/inception_enter/inception_enter _", "jpg",86)
    picLoadingFun("imgdsanone2","images/p1/inception_loop/inception_loop_", "jpg",36)
    
    picLoadingFun("imgdsanone2","images/p2/interstellar_enter/interstellar_enter_", "jpg",90)
    picLoadingFun("imgdsanone2","images/p2/interstellar_loop/interstellar_loop_", "jpg",36)
    
    picLoadingFun("imgdsanone2","images/p3/batman_enter/batman_enter _", "jpg",107)
    picLoadingFun("imgdsanone2","images/p3/batman_loop/batman_loop_", "jpg",48)
    
    picLoadingFun("imgdsanone2","images/p4/memento_enter/memento_enter _", "jpg",105)
    picLoadingFun("imgdsanone2","images/p4/memento_loop/memento_loop_", "jpg",36)
    
    picLoadingFun("imgdsanone2","images/p5/dunkirk_enter/dunkirk_enter_", "jpg",105)
    picLoadingFun("imgdsanone2","images/p5/dunkirk_loop/dunkirk_loop_", "jpg",48)  
    
    
     imgNum = $('.imgdsanone2 img').length;
     var imgTotal = $('.imgdsanone2 img').length;
     $('.imgdsanone2 img').load(function () {
         
         var p = twoLoad;
    	var q=GetPercent(imgTotal-imgNum,imgTotal);
//  	alert(0)
    	
    	console.log(imgNum);
	    $('.Start em').html((p>q?q:p)+"%"); 	   
	    //$('.Start em').html(q+"%"); 	   
        if (!--imgNum) {}
    })
    
    clearInterval(timer)
    timer = setInterval(loadingFun, 40);
}
var imgNum


///进度比
function GetPercent(num, total) { 
	num = parseFloat(num); 
	total = parseFloat(total); 
	if (isNaN(num) || isNaN(total)) { 
	return "-"; 
	} 
	return  total <= 0 ? 0 : (Math.round(num / total * 100)); 
} 


//加入所有图片
function picLoadingFun(obj,Route, format,num) {
    //console.log(Route+format)
    $.each(numfun(num), function (i, v) {
        $("."+obj).append("<img src='" + Route + addPreZero(i) + "." + format + "'/>")
    });
}

function numfun(num) {
    var arr = Array();
    for (var i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr;
}

function loadingFun(){	
	$(".Start img:eq(0)").attr("src","images/loading/loading_top/loading_top_"+addPreZero(current)+".png")
	$(".Start img:eq(1)").attr("src","images/loading/loading_front/loading_front_"+addPreZero(current)+".png")
	$(".Start img:eq(2)").attr("src","images/loading/loading_back/loading_back_"+addPreZero(current)+".png")
//	console.log(addPreZero(current))
	current++;
	if(current == 37 ){
		current=0;
	}
//	console.log($('.Start em').html())
	if($('.Start em').html() == "100%") {
		current = 0;
		clearInterval(timer2)
		clearInterval(timer);
		$(".Start").css("display","none");
		//进入盗梦空间
		$(".InceptionSpace").css("display","block");
		$("#audio").attr("src","music/1.mp3");
		
		if(is_weixn()) {
			autoPlayAudio();
		} else {
			 audioid.play();
		}
//		clearInterval(p1anton)
		timer=setInterval(spaceFun,40);
		
	}
}

function is_weixn() {
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == "micromessenger") {
				return true;
			} else {
				return false;
			}
		}
function autoPlayAudio() {
			wx.config({
				// 配置信息, 即使不正确也能使用 wx.ready
				debug: false,
				appId: '',
				timestamp: 1,
				nonceStr: '',
				signature: '',
				jsApiList: []
			});
			wx.ready(function() {
//				alert("weixin")
//				var globalAudio = document.getElementById("audio");
				 audioid.play();
			});
		};

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
//p1微呼吸效�?
function breathingfun(){
	$(".InceptionSpace img:eq(0)").attr("src","images/p1/inception_loop/inception_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;
	}
}
///点击进入星际穿越
function goP2(){
	$("#audio").attr("src","music/2.mp3");
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
//p2微呼吸效�?
function breathingfun2(){
//	console.log(current)
//	console.log(obj)
	$(".Interstellar img:eq(0)").attr("src","images/p2/interstellar_loop/interstellar_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;
	}
}



///点击进入蝙蝠�?
function goP3(){
	$("#audio").attr("src","music/3.mp3");
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
//p3微呼吸效�?
function breathingfun3(){
	$(".Batman img:eq(0)").attr("src","images/p3/batman_loop/batman_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 47) {
		current = 0;
	}
}



///点击进入记忆碎片
function goP4(){
	$("#audio").attr("src","music/4.mp3");
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
//p4微呼吸效�?
function breathingfun4(){
	$(".Memento img:eq(0)").attr("src","images/p4/memento_loop/memento_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 35) {
		current = 0;
	}
}





///点击进入敦刻尔克
function goP5(){
	$("#audio").attr("src","music/4.mp3");
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
//p5微呼吸效�?
function breathingfun5(){
	$(".Dunkirk img:eq(0)").attr("src","images/p5/dunkirk_loop/dunkirk_loop_"+addPreZero(current)+".jpg")
	current++;
	if(current == 47) {
		current = 0;
	}
}

///点击进入结尾
function goP6(){
	$("#audio").attr("src","music/1.mp3");
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



function addPreZero(num) {
    if (num < 10) {
        return '0000' + num;
    } else if (num < 100) {
        return '000' + num;
    } else if (num < 1000) {
        return '00' + num;
    } else {
        return num;
    }
}


//function reloadFun(){
//	//$(".imgdsanone2").html(" ");
//  window.location.href = window.location.href;
//}