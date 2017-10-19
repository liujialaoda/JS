$(function(){
	//自动轮播
	let banner = $('.banner');
	let bannerB = $('.banner-big');
	let lis = $('.banner>li');
	let btn =$('.tvn>li');
	let s1 = $('span.word-shang');
	let s2 = $('span.word-xia');
	let w = $('.banner').width();
	let now = 0;
	let next = 0;
	let flag = true;
	let t = setInterval(move,3000);
	$(s1).animate({opacity:1,top:'+=30'},1000);		
	$(s2).animate({opacity:1,top:'-=30'},1000);	
	function move(){
		next++;
		if(next ==lis.length){
			next = 0;
		}
		lis.eq(next).css({left:w});
		$(s1).css({opacity:0,top:170});		
		$(s2).css({opacity:0,top:330});	
		btn.eq(now).css('background','#CCCCCC');
		$(lis[now]).animate({left:-w});
		

		btn.eq(next).css('background','green');
		$(lis[next]).animate({left:0},function(){
			$(s1).animate({opacity:1,top:'+=30'},1000);		
			$(s2).animate({opacity:1,top:'-=30'},1000);	
			flag = true;
		});
		now = next;
	}
	
	
	
	//鼠标移入 轮播停止
	bannerB.on('mouseenter',function(){
		clearInterval(t);
	})
	bannerB.on('mouseleave',function(){
		t = setInterval(move,3000);
	})
	
	
	//左右点击
	
	let btnL = $('.left');
	let btnR = $('.right');
	btnR.on('click',function(){
		if(!flag){
			return;
		}
		move();
		flag = false;	
	})
	btnL.on('click',function(){
		if(!flag){
			return;
		}
		moveL();
		flag = false;
	})
	
	function moveL(){
		next--;
		if(next <0){
			next = lis.length-1;
		}
		lis.eq(next).css({left:-w});
		$(s1).css({opacity:0,top:170});		
		$(s2).css({opacity:0,top:330});	
		btn.eq(now).css('background','#CCCCCC');
		$(lis[now]).animate({left:w});
		

		btn.eq(next).css('background','green');
		$(lis[next]).animate({left:0},function(){
			$(s1).animate({opacity:1,top:'+=30'},1000);		
			$(s2).animate({opacity:1,top:'-=30'},1000);	
			flag = true;
		});
		now = next;
	}
	
    //小按钮点击
    btn.on('click',function(){
    	btn.each(function(index){
    		btn.eq(index).css('background','#CCCCCC');
    	})
    	btn.eq(this).css('background','red');
//  	lis.eq(next).css({left:w});
//		$(s1).css({opacity:0,top:170});		
//		$(s2).css({opacity:0,top:330});	
//  	lis.eq(now).animate({left:-w});
//  	lis.eq(next).animate({left:0},function(){
//  		$(s1).animate({opacity:1,top:'+=30'});		
//		    $(s2).animate({opacity:1,top:'-=30'});	
//  	});
//  	now = next;
    	
    })
    
    
    //小人图片鼠标移入放大
    let pimg = $('.team>li img');
    pimg.hover(function(){
    	$(this).css('transform','scale(1.2)')
    },function(){
    	$(this).css('transform','scale(1.0)')
    })
    
})