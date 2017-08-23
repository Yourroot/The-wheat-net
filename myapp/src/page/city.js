import React,{Component} from 'react';
//引进样式
import '../css/city.css'
//引进请求数据
import services from'../services/homeservices.js'
export default class City extends Component{
	constructor(){
		super();
		this.state={
			letter:[
//				'A': ['', '', ''],
//				'B': [' ', '', ''],
//				'C': ['', '']
			],
		}
	}
	
	
	render(){
			//字母
			if(this.state.letter=='null'||this.state.letter=='undefined'){
				console.log('1111')
			}else{
				console.log('1222111')
				console.log(this.state.letter)
				let Letter= this.state.letter.letter.map((item,index)=>{
                            return  <li>1</li>
                    })        
			}
				
//			if (this.state.letter['A'] == null){
//				this.state.letter['A'] = [];
//			}
//			this.state.letter['A'].push(item);				


		return(
			<div class="page" id="city">
				<p>GPS定位你所在城市</p>
				<p class="city-index-title">深圳</p>
				<p>热门城市</p>
				<ul class="hotcity">
					<li>深圳</li>
					<li>深圳</li>
					<li>深圳</li>
					<li>深圳</li>
					<li>深圳</li>
				</ul>
				<p>按字母排序</p>
				<ol class="alphabetclass">
					{Letter}
				</ol>
				<div class="index-city-list">
					<dl>
						<dt>A</dt>
						<dd>啊啊</dd>
						<dd>哎哎</dd>
						<dd>啊啊</dd>
						<dd>哎哎</dd>
						<dd>啊啊</dd>
						<dd>哎哎</dd>
					</dl>
				</div>
			</div>
			)
		}
	
	componentWillMount(){
		//	请求数据
		services.getAddressData()
		.then((result)=>{
			this.setState({letter:result})
		})
	}
	
	}

