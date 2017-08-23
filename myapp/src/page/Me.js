//引进react Compoent
import React ,{Component} from 'react'

export default class Me extends Component {
    constructor(){
        super();
    }
    //渲染结构
    render(){
            return(
                <div class="page" id="me">
                   <form>
                   		<input type="text" />
                   </form>
                </div>
            )
    }
}