//引进react Compoent
import React ,{Component} from 'react'
//引进movie样式
import '../css/common/MovieList.css'
//引进进服务
import Homeservices from '../services/homeservices.js'
//引进公共组件
import MovieList from'../component/common/MovieList.js'
export default class Movie extends Component {
    constructor(){
        super();
        this.state={
        	tabs:[
        		{tabName:"正在热映",id:0},
				{tabName:"即将上映",id:1}
        	],
        	currentIndex:0,
        	isShow:0,
        }
    }
	
    //渲染结构
    render(){
    	var Lis=this.state.tabs.map((item,index)=>{
    				// 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
           			var tabStyle=item.id==this.state.currentIndex ? ' active' : ' ';
                  return	<li class={tabStyle} onClick={this.tabChoiced.bind(this,index)} key={index}>{item.tabName}</li>
           })
            return(
                <div class="page" id="movie">
                   <ul class="movie-toggle">
                   		{Lis}
                   </ul>
                   <MovieList isShow={this.state.isShow}> </MovieList>
                </div>
            )
    	}
   		//请求数据事件
	  tabChoiced(i){
		//电影列表
		console.log(i)
		this.setState({currentIndex:i})
		this.setState({isShow:i})
	  }	 
   
    //生命周期
    componentWillMount(){
    	//电影列表一加载
 
    	
    }
}