/*
* @file: localStorage和cookie组成的缓存
* @author: jjw
* @date: 2018-4-24
*
* */

const JCACHE = {
	set(key,val) {
		//数据
		const json = {
			"data": val
		}
		const data = JSON.stringify(json)
		if(window.localStorage){//如果支持localStorage
			window.localStorage.setItem(key, data)
		}else{//不支持的话，使用cookie
			this.setCookie(key,data)
		}
	},
	get(key) {
		let json
		if(window.localStorage){//如果支持localStorage
			json = JSON.parse(window.localStorage.getItem(key))
		}else{//不支持的话，使用cookie
			// json = JSON.parse($.cookie(key))
			const str = this.getCookie(key)
			json = JSON.parse(str)
		}
		if(json && json['data']){
			const data = json.data
			return data
		}else{
			return null
		}
	},
	
	setCookie(name,value) { 
	    let Days = 90; 
	    let exp = new Date(); 
	    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
	}, 

	//读取cookies 
	getCookie(name) { 
	    let arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	    if(arr = document.cookie.match(reg)){
	        return unescape(arr[2]); 
	    }else {
	        return null; 
	    }
	}

}

export default JCACHE
