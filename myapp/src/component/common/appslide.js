//引进react component
import React,{Component} from 'react'
//引进Link连接
import {Link} from 'react-router-dom'
//引进css
import "../../css/commonheader.css"
//引进服务处理services
import  menu from"../../services/silderBarInfo"

export default class Appslide extends Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
                //侧边栏显现
            let sliderBarStyle={
                transform:this.props.show?"none":"translateX(-100%)"
            }
            //遮蔽层
            let coverStyle={
                background:this.props.show?"rgba(0,0,0,0.5)":"rgba(0,0,0,0.0)",
                display:this.props.show?"block":"none"
            }
            //控制侧边栏出现二种方法
            let data=this.props.location.pathname==="/Store"?menu.shopSilderBarData:menu.homeSilderBarData;
        return(
            <div>
                <div class="cover" style={coverStyle}></div>
                <nav class="slider-bar" style={sliderBarStyle}>
                    {  
                        data.map((item,index)=>{
                            return  <a key={index}  onClick={this.ByVal.bind(this,item)}>{item.title}<span>></span></a>
                        })
                    }
                </nav>
            </div>
        )
    }
    //方法`
    ByVal(item){
           //接收到传来的参数
           this.props.history.push(item.path)
           //触发父级事件
           this.props.hideslide(item)
    }
}