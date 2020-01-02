import React from "react";
import '../Style/header.css'
class Header extends React.Component{
    render() {
        return(
            <div className="nav-bar">
                    <div className="container">
                        <div className="left"><h1>Todo App</h1></div>
                        <div className="right">
                            {this.props.data.map((value,index)=><li key={index} className={value.status?'active':''} onClick={()=>this.props.handler(index)}>{value.title}</li>)}
                        </div>
                    </div>
            </div>
        )
    }
}
export default  Header;