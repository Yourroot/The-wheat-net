//引进react component组件
import React ,{Component} from 'react'
//引进样式
import "../../css/commonheader.css"
//引进路由
import {Link} from 'react-router-dom'
export default class Appheader extends Component{
        constructor(){
            super();
        }
        render(){
                return(
                    <header>
                        <h1 onClick={this.menution.bind(this)}>
                            <span class="iconfont icon-sangeheng"></span>
                            {this.props.headerTitle}
                        </h1>
                            <div class="header-right">
                                <Link to="/city"><span class="icon-arrow iconfont" onClick={this.addCityaction.bind(this)}>深圳</span></Link>
                                <i class="iconfont icon-e60213"></i>
                            </div>
                    </header>

                )
        }

    //触发方法
    menution(){
        //触发父级方法
        this.props.menuHandle()
    }
    addCityaction(){
    	console.log("1111")
    }
}