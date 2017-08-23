//引进API接口
import Api from'../Api/api'
//引进axios请求
import axios from'axios'
//主页banner图数据
function getHomebannerData(){
        return new Promise((resolve,reject)=>{
               
    axios.get(Api.HomebannerApi)
    //成功反应
    .then((respsonse)=>{
    	if(respsonse.data.data.billboards){
    		resolve(respsonse.data.data.billboards)
    	} 
        })
    })
}
//主页头部地址数据
	function getAddressData(){
		return new Promise((resolve,reject)=>{
			axios.get(Api.AddressApi)
			.then((respsonse)=>{
					var arr={}
					//字母
					var letter=[]
				var newArr=respsonse.data.data.cities.map((item,index)=>{
						//把第一字母放在一个数组里
						letter.push(item.pinyin.substring(0,1))
				})
						//去重后
						var mySet = new Set(letter);
						//转化成arry
						var LetterArr = Array.from(mySet) 
							LetterArr.sort()
						//把他放到arr里面
						arr.letter=LetterArr;
						resolve(arr)
			})
			
		})
	}
//主页列表
	function getHomelistData(){
		return new Promise((resolve,reject)=>{
			axios.get(Api.HomeList)
			.then((respsonse)=>{
				resolve(respsonse.data.data.films)
			})
		})
	}
//主页列表二
	function getHomlistData2(){
		return new Promise((resolve,reject)=>{
			axios.get(Api.HomeList2)
			.then((respsonse)=>{
				var newArr=respsonse.data.data.films.map((item)=>{
							let arr={}
							arr.grade=item.grade;
							arr.id=item.id;
							arr.name=item.name;
							arr.origin=item.cover.origin
							//转变成时间			
							let data=new Date(item.premiereAt)
							let mm=data.getMonth()+1;
							let dd=data.getDate()
							arr.premiereAt=mm+"月"+dd+"日"
							return arr;
				})
					resolve(newArr)
			})
		})
	}
	//详情页面数据particularsApi
	function getParticularsData(){
		return new Promise((resolve,reject)=>{
				axios.get(Api.particularsApi)
				.then((responsed)=>{
					let arr=responsed.data.data.film
					let newarr={}
					newarr.actors=arr.actors;
					newarr.category=arr.category;
					newarr.director=arr.director;
					newarr.id=arr.id;
					newarr.language=arr.language;
					newarr.nation=arr.nation;
					//转变成时间			
					let data=new Date(arr.premiereAt)
					let mm=data.getMonth()+1;
					let dd=data.getDate()
					newarr.premiereAt=mm+"月"+dd+"日"
					newarr.origin=arr.poster.origin;
					newarr.synopsis=arr.synopsis;
					resolve(newarr)
			})
				
		})
	}
//电影列表
	function getMovielistData(){
		return new Promise((resolve,reject)=>{
			axios.get(Api.MovielistApi)
			.then((responsed)=>{
			 let newarr=responsed.data.data.films.map((item,index)=>{
					var arr={}
					arr.grade=item.grade
					arr.id=item.id
					arr.origin=item.cover.origin
					arr.intro=item.intro
					arr.name=item.name
					arr.watchCount=item.watchCount
					return arr
				})
				 resolve(newarr)
			})
		})
	}
// 电影列表er
	function MovieComingData(){
		return new Promise((resolve,reject)=>{
			axios.get(Api.MovielistApi)
			.then((responsed)=>{
				console.log(responsed)
			})
		})
	}
//影院 
	function  CinemaData(){
		return new Promise((resolve,reject)=>{
			axios.get(Api.CinemaApi)
			.then((responsed)=>{
						var city=[]
						var newarr=[]
				responsed.data.data.cinemas.map((item,index)=>{	
						city.push(item.district.name)
				})
					//去重后
					var mySet = new Set(city);
					//转化成arry
					var CityArr = Array.from(mySet)
						
					for(var i=0; i<CityArr.length;i++){
							var obj = {}
							obj.title = CityArr[i]
							obj.ishow=false
							obj.arr=[]
						responsed.data.data.cinemas.map((item,index)=>{		
								if(obj.title == item.district.name){
									obj.arr.push(item)
								}
						})
						
						newarr.push(obj)
					}
					resolve(newarr)	
			})
		})
	} 
	function CinemaparticularsApi(){
		return  new Promise((resolve,reject)=>{
			axios.get(Api.CinemaparticularsApi)
			.then((respond)=>{
					console.log(respond)
				
			})
		
		})
		
	}
//暴露
export default{
    getHomebannerData,
    getAddressData,
    getHomelistData,
    getHomlistData2,
    getParticularsData,
    getMovielistData,
    MovieComingData,
    CinemaData,
}