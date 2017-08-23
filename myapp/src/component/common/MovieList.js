//引进react 
	import React,{Component} from 'react'
//引进公共样式
	import '../../css/common/MovieList.css'
//引进进服务
import Homeservices from '../../services/homeservices.js'
export default class Movie extends Component {
    constructor(){
        super();
        this.state={
        	MovieListData:{},
        	MovieComingData:{},
        }
    }
    //渲染结构
    render(){
    			//判断是请求什么数据
    			 let data=this.props.isShow =="0"?this.state.MovieListData:this.state.MovieComingData;
    			 console.log(data)
    				if(data=="underfined"){
    					
    				}
            return(
                <div id="Movielist">
              		<ol>
              			<li>
              				<img src="https://pic.maizuo.com/usr/movie/416915e0ee44bc7d29d365fb54d28ec4.gif?x-oss-process=image/resize,m_fixed,h_0,w_300"/>
              				<div class="Movielistright">
              					<h5>
              						<span>战狼2</span>
              						<span>8.5<i>></i></span>		
              					</h5>
              					<p>只身冲险地 帅过宋仲基</p>
              					<p>
              						<span>1家影院上映</span>
              						<span>人购票  </span>
              					</p>
              				</div>
              			</li>
              		</ol>
                </div>
            )
    }   
   //生命周期
    componentWillMount(){
    	//默认为加载
    	Homeservices.getMovielistData()
    	.then((result)=>{
    		this.setState({MovieListData:result})
    	})
    	console.log('1111')
    	console.log(this.props.isShow)
    }
    //props情况
    componentWillUpdate(){
    	console.log('sss222')
    	console.log(this.props.isShow)
    	if(this.props.isShow==0){
    			Homeservices.getMovielistData()
		    	.then((result)=>{
		    		this.setState({MovieListData:result})
		    	})
    	}else if(this.props.isShow ==1){
    		Homeservices.MovieComingData()
		    	.then((result)=>{
		    		this.setState({MovieListData:result})
		    	})
    	}
    }
    
}