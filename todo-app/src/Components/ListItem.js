import React from "react";
import '../Style/listItem.css'
class ListItem extends React.Component{

    render() {
        return(
         <div className={'list'} key={this.props.index}>
             <p className={this.props.status?'line-through':''}>{this.props.data}</p>
             <span className={'check-mark'} onClick={this.props.clickHandler}>{this.props.status?'ON':'OFF'}</span>
         </div>
        )
    }
}
export default ListItem;