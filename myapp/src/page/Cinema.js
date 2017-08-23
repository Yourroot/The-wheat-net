//引进react Compoent
import React ,{Component} from 'react'
//引进服务
import Homeservices from '../services/homeservices.js'
//引进css样式
import '../css/Cinema.css'
export default class Cinema extends Component {
    constructor({history}){
        super();
        this.state={
        	Cinemadata:[],
        	ishow:false,
        	history,
        }
    }
    //渲染结构
    render(){	
    		if(this.state.Cinemadata==null){
    		}else{
    			var Lis=this.state.Cinemadata.map((item,index)=>{
    				var style=this.state.ishow?'block','none'
    			return  <li key={index}>
    						<h5 onClick={this.ishow.bind(this,index)}>{item.title}</h5>
    						<ol ref={'ol'+index}>
    							{Lis}
    						</ol>
    					</li>
    				let	Lis=item.arr.map((i,j)=>{
    						return	<li key={j} onClick={this.cinemalist.bind(this)}>
    									<p class="title">
    										<span>{i.name}</span>
    										<span>座</span>
    										<span>通</span>
    									</p>
    									<p class="privilege">
    										{
    											i.labels.map((q,w)=>{
    												return <span>{q.name}</span>
    											})
    										}
    									</p>
    									<p class="address">深圳福田区中航路1号华强北九方购物中心4楼（南区）L428</p>
    									<p class="distance">距离未知</p>
    								</li>
    			})	
    				
    			
    			})
    		}
        return(
            <div class="page" id="Cinema">
       			<ul class="partition">
       				{Lis}
       			</ul>
            </div>
        )
    }
    componentWillMount(){
    	Homeservices.CinemaData()
    	.then((result)=>{
    		this.setState({Cinemadata:result})
    	})
    }
    //方法
    ishow(i){
		console.log(i)
    }
    //进入电影院
    cinemalist(){
		this.state.history.push('/Cinemaparticular')
    }
    
}