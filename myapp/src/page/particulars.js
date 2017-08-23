	//引进react component组件
	import React ,{Component} from 'react'
	//引进Paticulars样式
	import '../css/Paticulars.css'
	//引进服务
	import Homeservices from '../services/homeservices.js'
	export default class Particulars  extends Component{
			constructor({history}){
				super();
				this.state={
					history,
					ParticularsData:{}
				}
			}
			render(){
					//判断是否为空值
					if(this.state.ParticularsData.actors==undefined){
					}else{
						var  box=this.state.ParticularsData.actors.map((item,index)=>{
							return <span key={index}>{item.name}|</span>
						})
					}
					return(
						<div class="page" id='Paticulars'>
							<img src={this.state.ParticularsData.origin} />
							<h3>影片简介</h3>
							<div class="main">
								<p><span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演</span>:<span>{this.state.ParticularsData.director}</span></p>
								<p><span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演</span>:{box}</p>
								<p><span>地区语言：</span><span>{this.state.ParticularsData.nation}({this.state.ParticularsData.language})</span></p>
								<p><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</span>：<span>{this.state.ParticularsData.category}</span></p>
								<p><span>上映时间:</span><span>{this.state.ParticularsData.premiereAt}上映</span></p>
							</div>
							<p>{this.state.ParticularsData.synopsis}</p>
							<button>立即购票</button>
						</div>
						
					)		
			}
			//
			componentWillMount(){
				Homeservices.getParticularsData()
				.then((result)=>{
					this.setState({ParticularsData:result})
				})
			}
	}
