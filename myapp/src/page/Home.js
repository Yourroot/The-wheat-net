//引进react Compoent
import React ,{Component} from 'react'
//引进路由
import {Route} from 'react-router-dom'
//引进处理数据
import homeservices from'../services/homeservices.js'
//引进赖加载
import LazyLoad from 'react-lazyload';

var bannerSwiper
//引进homecss样式
import '../css/Home.css'
export default class Home extends Component {
    constructor({history}){
        super();
        this.state={
            homebanner:[],
            //主页main1数据
            homelist:[],
            //主页main2
            homelist2:[],
            history,
        }
    }


导航等组件可以放在container之外
    //渲染结构
    render(){
                //banner图数据
                let bannerdate= this.state.homebanner.map((item,index)=>{
                                        return  <a key={index} class="swiper-slide">
                                                    <img src={item.imageUrl} />
                                                 </a>
                                      })
               //主页列表1
               	let homelistdata=this.state.homelist.map((item,index)=>{
               			return  <li key={index} onClick={this.adddetails.bind(this,item.id)}>
               						  <LazyLoad height={50} once>
               						<img src={item.cover.origin} />
               						</LazyLoad>
               						<div class="merchantlist">
               								<div class="hoemdetails">
               									<span>{item.name}</span>
               									<p>
               									<span>1家影院上映 </span>
               									<span>{item.watchCount}人购票</span>
               									</p>
               								</div>
               								<span>{item.grade}</span>
               						</div>
               					</li>
               	})
               //主页列表2
               let homelis2tdat=this.state.homelist2.map((item,index)=>{
               		return  	<li key={index}>
               						<img src={item.origin} />
               						<p><span>{item.name}</span><span>{item.premiereAt}</span></p>
               					</li>
               })
            return(			
              			  <div class="page"id="Home">
			                 	<div class="homewrapper">
				                 	<div ref="banner" class="swiper-container Homeheader">
				                        <ul className=" swiper-wrapper">
				                            {bannerdate}
				                        </ul>
				                    </div>
				                    <div class="Homemain1">
				                    	{homelistdata}
				                    	<p>更多热映电影</p>
				                    </div>
				                    <div class="Homemain2">
				                    		<div class="dividing-line">
				                    			<p class="upcoming">即将上映</p>
				                    		</div>
				                    		<ul class="list-unstyled">
				                    			{homelis2tdat}
				                    			<p>更多即将上映电影</p>
				                    		</ul>
				                    </div>
			                 	</div>
			                 	<div class="backtop icon-huidaodingbu iconfont" id="backtop"></div>
			                </div>
			                
            )
    }
    //生命周期
    componentWillMount(){
        //homebanner图数据
        homeservices.getHomebannerData()
        .then((result)=>{
            this.setState({homebanner:result})
            bannerSwiper.update();
        })
        //主页内容1
        homeservices.getHomelistData()
        .then((result)=>{
        	this.setState({homelist:result})
        })
        //主页内容2
        homeservices.getHomlistData2()
        .then((result)=>{
        	this.setState({homelist2:result})
        })
    }
    componentDidMount(){
        bannerSwiper = new Swiper (this.refs.banner, {
            direction: 'horizontal',
            loop: true,
            autoplay:500        
        }) 
        //回到顶部
       	 var home=document.getElementById("Home")
    		home.addEventListener('scroll',function(e){
						if(home.scrollTop>=200){
							document.getElementById('backtop').style.display="block"
						}else{
							document.getElementById('backtop').style.display="none"
						}
						
    			})
    	document.getElementById('backtop').onclick=function(e){
    					home.scrollTop=0
    	}
    	
    }
    //方法
    adddetails(id){
    	this.state.history.push({
    		pathname:'/particulars',
    		state:{
    			id:id,
    		}
    	})
    }
  	
}