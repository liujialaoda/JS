 class stroage{
 	constructor(){
 		this.date = [];
 	}
 	
 	//初始化
 	init(){
 		let arr = [
	   {name:'刘湘燕',sex:'女',tel:'13935809419',age:'22',address:'德州',caozuo:'删除'},
	   {name:'李叉叉',sex:'女',tel:'15735801109',age:'23',address:'青岛',caozuo:'删除'},
	   {name:'陈榕',sex:'女',tel:'13266349012',age:'22',address:'济南',caozuo:'删除'},
	   {name:'岳新宁',sex:'女',tel:'13633126487',age:'22',address:'淄博',caozuo:'删除'},
	   {name:'郑婉宁',sex:'女',tel:'18345982343',age:'22',address:'潍坊',caozuo:'删除'},
	   {name:'陈桓',sex:'男',tel:'15735808733',age:'24',address:'烟台',caozuo:'删除'},
	   {name:'刘洪俊',sex:'男',tel:'17094940819',age:'22',address:'天津',caozuo:'删除'}
	      ]
 		localStorage.setItem('student',JSON.stringify(arr));
 	}
 	//获取
 	getdate(){
 		let date = JSON.parse(localStorage.getItem('student'));
 		if(!date){
 			this.init();
 		}
 		return date = JSON.parse(localStorage.getItem('student'));
 	}
 	
 	//更新
 	update(row,type,value){
 		let date = JSON.parse(localStorage.getItem('student'));
 		date[row][type] = value;
// 		console.log(row,type,value)
 		this.save(date);
 	}
 	
 	//删除
 	del(index){
 		let date = JSON.parse(localStorage.getItem('student'));
        date.splice(index,1);
 		this.save(date);
 	}
 
 
    //添加
    
    add(obj){
 		let date = JSON.parse(localStorage.getItem('student'));
    	date.push(obj);
    	this.save(date);
    }
    
 	//保存
 	save(date){
 		localStorage.setItem('student',JSON.stringify(date));
 	}
 	
 	
 }
