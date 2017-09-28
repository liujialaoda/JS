window.onload = function(){
	let table = document.querySelector('tbody');
	let add = document.querySelector('.add');
	let celect = document.querySelector('.celect');
	
//	let student = [
//	   {name:'刘湘燕',sex:'女',tel:'13935809419',age:'22',address:'德州',caozuo:'删除'},
//	   {name:'李叉叉',sex:'女',tel:'15735801109',age:'23',address:'青岛',caozuo:'删除'},
//	   {name:'陈榕',sex:'女',tel:'13266349012',age:'22',address:'济南',caozuo:'删除'},
//	   {name:'岳新宁',sex:'女',tel:'13633126487',age:'22',address:'淄博',caozuo:'删除'},
//	   {name:'郑婉宁',sex:'女',tel:'18345982343',age:'22',address:'潍坊',caozuo:'删除'},
//	   {name:'陈桓',sex:'男',tel:'15735808733',age:'24',address:'烟台',caozuo:'删除'},
//	   {name:'刘洪俊',sex:'男',tel:'17094940819',age:'22',address:'天津',caozuo:'删除'},
//	];

    let dateObj = new stroage();

    load();
    function load(){
    let stu = dateObj.getdate();
    
	stu.forEach((element,index)=>{
		addtr(element,index);
	})//这种方法是把全部的元素一下子添加到页面
	}


	function addtr(obj,id){
		let trs = document.createElement('tr');
		trs.id = id;
		trs.innerHTML = `
				<td type = 'name'>${obj.name}</td>
				<td type = 'sex'>${obj.sex}</td>
				<td type = 'tel'>${obj.tel}</td>
				<td type = 'age'>${obj.age}</td>
				<td type = 'address'>${obj.address}</td>
				<td type = 'caozuo'><button>${obj.caozuo}</button></td>
		`
		table.appendChild(trs);
	}
	
	//添加
	add.onclick = function(obj){
		let obj1 = {name:'刘湘燕',sex:'女',tel:'13935809419',age:'22',address:'德州',caozuo:'删除'};
//		table.push(obj1);
		dateObj.add(obj1);
		table.innerHTML = '';
		load();
	}
	
    //更新
	table.ondblclick = function(e){
		let element = e.target;
		if(element.nodeName == 'TD'){
			let oldv = element.innerText;
			element.innerText = '';
			let inputs = document.createElement('input');
			inputs.value = oldv;
			element.appendChild(inputs);	
			inputs.onblur = function(){
				let newv = inputs.value.trim();
				inputs = null;
				if(!newv){
					element.innerText = oldv;
				}
				element.innerText = newv;	
				
				let row = element.parentNode.id;
				let type = element.getAttribute('type');
				let value = newv;
				console.log(row,type,value);
				dateObj.update(row,type,value);
			}
		}else if(element.nodeName == 'BUTTON'){
			table.removeChild(element.parentNode.parentNode);
			dateObj.del(element.parentNode.parentNode.id);//删除
		    table.innerHTML = ''; 
			load();
		}
	}
	
	
}
