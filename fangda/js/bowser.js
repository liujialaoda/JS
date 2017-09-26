//let all = document.getElementsByTagName('*');
//function bow(classname){
//		if(document.getElementsByClassName){
//			return document.getElementsByClassName(classname);
//		}
//		else{
//			let newarr=[];
//			for (let i=0;i<all.length;i++) {
//				if(all[i].className==classname){
//			        newarr.push(all[i]);		
//				}
//			}
//					return newarr;
//		}
//
//}

//function bow(classname){
//		if(false){
//			return document.getElementsByClassName(classname);
//		}
//		else{
//			let newarr=[];
//			for (let i=0;i<all.length;i++) {
//				if(cheak(all[i].className,classname)){
//			        newarr.push(all[i]);		
//				}
//			}
//		return newarr;
//		}
//
//}
//
//function cheak(className1,classname){
//	let arr= className1.split(' ');
//  for (let i=0;i<arr.length;i++) {
//  	if(arr[i] == classname){
//  		return true;
//  	}
//  }
//  return false;
//}



function getClass(classname,ranger){
	ranger = ranger ? ranger : document;
		if(document.getElementsByClassName){
			return ranger.getElementsByClassName(classname);
		}
		else{
			let all = ranger.getElementsByTagName('*');
			let newarr=[];
			for (let i=0;i<all.length;i++) {
				if(cheak(all[i].className,classname)){
			        newarr.push(all[i]);		
				}
			}
		return newarr;
		}

}

function cheak(className1,classname){
	let arr= className1.split(' ');
    for (let i=0;i<arr.length;i++) {
    	if(arr[i] == classname){
    		return true;
    	}
    }
    return false;
}

//  $()  获取指定元素   or 重载
function $(select,ranger){//select是字符串
	if(typeof select =='string'){
	  var first = select.charAt(0);
	  ranger = ranger ? ranger : document;
	  if(first =='.'){
	      return getClass(select.substr(1),ranger);
	  }
	  else if(first =='#'){
	      return ranger.getElementById(select.substr(1));
	  }
	  else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
	     return ranger.getElementsByTagName(select);
	  }
 }else if(typeof select =='function'){
 	window.addEventListener('load',select);
   }
}
