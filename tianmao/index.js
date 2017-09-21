window.onload = function(){
	//侧导航
	let aside = document.getElementsByClassName('aside');
	let lis = aside[0].getElementsByTagName('li');
	let items= document.getElementsByClassName('item');
	for (let i=0;i<lis.length;i++) {
		lis[i].onmousemove = function(){
			items[i].style.display= 'block';
		}
		lis[i].onmouseout = function(){
			items[i].style.display= 'none';
		}
	}
	
	//banner轮播
	let tvn = document.getElementsByClassName('tvn')[0];
	let stvn = tvn.getElementsByClassName('small-tvn');
	let bannertu = document.getElementsByClassName('bannertu')[0];
	let w = parseInt(getComputedStyle(bannertu,null).width);
	let ass = bannertu.getElementsByTagName('a');
	let banner = $('.content')[0];
	let now = 0;
	let next = 0;
	let time ;
	time = setInterval(move,2000);
	function move(){
		next++;
		if(next==ass.length){
			next = 0;
		}
		ass[next].style.left = w+'px';
		animate(ass[now],{left:-w});
		stvn[now].style.background='#CCCCCC';
		animate(ass[next],{left:0});
		stvn[next].style.background= 'red';
		now = next;
	}
	
//	tvn.onmouseover = function(){
//		clearInterval(time);
//	}
//	tvn.onmouseout = function(){
//	    time = setInterval(move,2000);
//	}
	banner.onmouseover = function(){
		clearInterval(time);
	}
	banner.onmouseout = function(){
	    time = setInterval(move,2000);
	}
	//banner 点击
	for(let i=0;i<stvn.length;i++){
		stvn[i].onclick = function(){
		    if(i == now){
			   ass[now].style.left = '0';
		    }
		    else{
				ass[i].style.left = w+'px';
				animate(ass[now],{left:-w});
			    stvn[now].style.background='#CCCCCC';
			    stvn[i].style.background= 'red';
			    animate(ass[i],{left:0});
			    now = next = i;
		    }
		}
	}
	//轮播
//	let t;
//	let num = 0;
//	ass[0].style.zIndex='5';
//	t = setInterval(move,1000);
//	function move(){
//		num++;
//		if(num>=ass.length){
//			num=0;
//		}
//		for(let i=0;i<ass.length;i++){
//			ass[i].style.zIndex = '4';
//			stvn[i].style.background = '#cccccc';
//		}
//		ass[num].style.zIndex = '5';
//		stvn[num].style.background = 'red';
//	}
//	banner.onmouseover = function(){
//		clearInterval(t);
//	}
//	banner.onmouseout = function(){
//	    t = setInterval(move,1000);
//	}
//	
//	//banner图点击
//	for (let i=0;i<stvn.length;i++) {
//		stvn[i].onclick = function(){
//			for(let j=0;j<ass.length;j++){
//				ass[j].style.zIndex = '4';
//				stvn[j].style.background = '#cccccc';
//			}
//			ass[i].style.zIndex = '5';
//			stvn[i].style.background = 'red';
//			num = i;
//		}
//	}
    
   //我的淘宝下拉特效
   let sright = $('.right')[0];
   let liss = $('li',sright)[0];
   let my = $('.my',sright)[0];
    liss.onmouseover = function(){
   	   my.style.height = '58px';
   }
    liss.onmouseout = function(){
   	   my.style.height = '0px';
   }
    
    
    //我的收藏
    let lisss = $('li',sright)[3];
    let my3 = $('.my3',lisss)[0];
    lisss.onmouseover = function(){
   	   my3.style.height = '58px';
   }
    lisss.onmouseout = function(){
   	   my3.style.height = '0px';
   }
    
    //我的手机
    let lissss = $('li',sright)[4];
    let iphone = $('.iphone',lissss)[0];
    lissss.onmouseover = function(){
   	   iphone.style.display = 'block';
   }
    lissss.onmouseout = function(){
   	   iphone.style.display = 'none';
   }
    
    //商家支持
    let lisssss = $('li',sright)[7];
    let support = $('.support',lisssss)[0];
    lisssss.onmouseover = function(){
   	   support.style.display = 'block';
   }
    lisssss.onmouseout = function(){
   	   support.style.display = 'none';
   }
    
    //网址导航
    let lissssss = $('li',sright)[8];
    let dao = $('.dao',lissssss)[0];
    lissssss.onmouseover = function(){
   	   dao.style.display = 'block';
   }
    lissssss.onmouseout = function(){
   	   dao.style.display = 'none';
   }
}

