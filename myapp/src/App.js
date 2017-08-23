//引进react component组件
import React,{Component} from 'react'
//引进路由和路由容器
import {BrowserRouter as Router,Route} from 'react-router-dom'
//引进公共样式
import './css/common/app.css'
//引进公共头部组件
import   Header  from './component/common/appheader.js'
//引进公共侧边栏组件
import Appslide from './component/common/appslide.js'
//引进城市页面
import City from './page/city.js'
//引进主页等page页面
import Home from './page/Home.js'
//引进详情页面
import Particulars from './page/ particulars.js'
import Movie from './page/Movie.js'
import Cinema from './page/Cinema.js'
//引进电影院详情页面
import Cinemaparticular	from './page/Cinemaparticular.js'
import Store from './page/Store.js'
import Me from './page/Me.js'
import Blockbustercard from './page/Blockbustercard.js'
	export default class App extends Component{
			constructor(){
				super();
				this.state={
					//头部标题
					headerTitle:"卖座电影",
					//侧边栏显示
					showsild:false,
				}
			}inst
			render(){
				return (
					//容器
					<Router>
						<div>
							<Header menuHandle={this.menuHandle.bind(this)} headerTitle={this.state.headerTitle} ></Header>
							{/*组件路由容器第二种做法一般用于传参*/}
							<Route path="/" render={({history,location})=>{
								return 	<Appslide show={this.state.showsild}
								history={history} location={location} 
								hideslide={this.hideslide.bind(this)}/>
							}}/>
							{/*page路由容器*/}
								<Route path="/" exact component={Home}/>
								<Route path="/Movie" component={Movie}/>
								<Route path="/Cinema" component={Cinema}/>
								<Route path="/Store" component={Store}/>
								<Route path="/Me" component={Me}/>
								<Route path="/Blockbustercard" component={Blockbustercard}/>
								<Route path='/city' component={City}/>
								<Route path='/particulars' component={Particulars}/>
								<Route path='/Cinemaparticular' component={Cinemaparticular}/>
						</div>
					</Router>
				)		
			}
		//子级触发父级方法响应了
		menuHandle(){
			this.setState({showsild:!this.state.showsild})
		}
		hideslide(item){
			//改变headerTitle通过子传父
			this.setState({headerTitle:item.header})
			this.setState({showsild:false})
		}
	}
