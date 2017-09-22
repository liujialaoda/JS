window.onload = function(){
	let cen = document.getElementsByClassName('cenav')[0];
	let lis = cen.getElementsByTagName('li');
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseover = function(){
			let items = this.getElementsByClassName('item')[0];
			items.style.display = 'block';
		}
		lis[i].onmouseout = function(){
			let items = this.getElementsByClassName('item')[0];
			items.style.display = 'none';
		}
	}
	
    let bigbanner = document.getElementsByClassName('banner')[0];
	let banner = document.getElementsByClassName('bannerbody')[0];
	let lies = banner.getElementsByTagName('li');
	let w = parseInt(getComputedStyle(banner,null).width);
	let circle = document.getElementsByClassName('circle-last');
	let left = document.getElementsByClassName('banner-left')[0];
	let right = document.getElementsByClassName('banner-right')[0];
	//自动轮播
	let now =0;
	let next = 0;
	let tit ;
	let flag = true;
	tit = setInterval(move,2000);
	function move(){
		next++;
		if(next==lies.length){
			next = 0;
		}
    	lies[next].style.left = `${w}px`;
		animate(lies[now],{left:-w});
		animate(circle[now],{background:'#ccc'});
		animate(lies[next],{left:0});
		animate(circle[next],{background:'red'},function(){
			flag = true;
		});
		now = next;
		
	}
	bigbanner.onmouseover = function(){
    	clearInterval(tit);}
    bigbanner.onmouseout = function(){
    	tit= setInterval(move,2000);
    }
	
	
		//banner上的左右箭头
	right.onclick = function(){
		if(!flag){
			return;
		}
		move();
		flag = false;
	}
	left.onclick = function(){
		if(!flag){
			return;
		}
		moveL();
		flag = false;
	}
	function moveL(){
    	next--;
    	if(next<0){
    	    next= lies.length-1;
    	}
    	lies[next].style.left = `${-w}px`;
		animate(lies[now],{left:w});
		animate(lies[next],{left:0},function(){
			flag = true;
		});
		now = next;
    }
	
	//banner图----点击
	
	for (let i=0;i<circle.length;i++) {
		circle[i].onclick = function(){	
			circle[now].style.background = '#CCCCCC';
			circle[i].style.background = 'red';      
			if(i>now){
				lies[i].style.left = w+'px';
				animate(lies[now],{left:-w});
	            animate(lies[i],{left:0});	
	    	    now = next =i;
			}else{
				lies[i].style.left = -w+'px';
				animate(lies[now],{left:w});
	            animate(lies[i],{left:0});	
	    	    now = next =i;
			}
				
    	    
	    }
  }
	//自动轮播
//  let tt;
//  let num = 0;
//  tt= setInterval(move,1000);
//  function move(){
//  	num++;
//  	if(num>=lies.length){
//  	    num= 0;
//  	}
//  	for (let i=0;i<lies.length;i++) {
//  		animate(lies[i],{opacity:0});
//  		circle[i].style.background = '#cccccc';
//  	}
//
//  	animate(lies[num],{opacity:1});
//  	circle[num].style.background = 'red';
//  }
//  
//  bigbanner.onmouseover = function(){
//  	clearInterval(tt);
//  }
//  bigbanner.onmouseout = function(){
//  	tt= setInterval(move,1000);
//  }
//  
//	//banner图----点击
//	for (let i=0;i<circle.length;i++) {
//		circle[i].onmouseover = function(){
//		    for (let j=0;j<lies.length;j++) {
//             animate(lies[j],{opacity:0});
//  		   circle[j].style.background = '#CCCCCC';
//  	    }
//  	    animate(lies[i],{opacity:1});
//  	    circle[i].style.background='red';
//  	    num = i;		
//		}
//	}
//  
//  
//  
//	//banner上的左右箭头
//	right.onclick = function(){
//		move();
//	}
//	left.onclick = function(){
//		moveL();
//	}
//	function moveL(){
//  	num--;
//  	if(num<0){
//  	    num= lies.length-1;
//  	}
//  	for (let i=0;i<lies.length;i++) {
//  		animate(lies[i],{opacity:0});
//  		circle[i].style.background = '#cccccc';
//  	}
//  	animate(lies[num],{opacity:1});;
//  	circle[num].style.background = 'red';
//  }
//	
	//购物车效果
	let che = document.getElementsByClassName('shoppingche')[0];
	let car = document.getElementsByClassName('car')[0];
	che.onmouseover = function (){
		animate(car,{display:'block'},300);
	}
	che.onmouseout = function (){
		animate(car,{display:'none'},300);
	}
	
	
	//下导航
	let body = $('.nav-body')[0];
	let bodyli = $('li',body);
	let pull = $('.pull',body);
	for (let i=0;i<bodyli.length;i++) {
		bodyli[i].onmouseover = function(){
			animate(pull[i],{display:'block'},100);
		}
		bodyli[i].onmouseout = function(){
			animate(pull[i],{display:'none'},100);
		}
	}
	
	
	//明星单品效果
	let good = $('.star-goods')[0];
	let starbtn = $('.star-btn')[0];
	let aass = $('a',starbtn);
	let al = $('a',starbtn)[0];
	let ar = $('a',starbtn)[1];
	let maxl=-1240;
	let maxr = 0;
	ar.onclick = function(){
//		let zuo = parseInt(getComputedStyle(good,null).left);
//		if(maxl>zuo){
//			return;
//		}
		animate(good,{left:-1240});
		animate(al,{color:'red'});
		animate(ar,{color:'#ccc'});
	}
	 al.onclick = function(){
//		let you = parseInt(getComputedStyle(good,null).left);
//		if(maxr<you){
//			return;
//		}
		animate(good,{left:0});
		animate(ar,{color:'red'});
		animate(al,{color:'#ccc'});
	}
	 
	 
	let zuo = parseInt(getComputedStyle(good,null).left);
	
	setInterval(function(){
		
		animate(good,{left:0});
//		if(zuo==0){
			animate(good,{left:-1240});
//		}
		console.log(zuo)
	},1000)
	
	
	
	
}
 