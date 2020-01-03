import React from "react";
import '../Style/listItem.css'
class ListItem extends React.Component{

    render() {
        return(
         <div className={'list-item'} key={this.props.index}>
             <p className={this.props.status?'line-through':''}>{this.props.data}</p>
             <div className={'check-mark '+ (this.props.status?'active':'inactive')}  onClick={this.props.clickHandler}/>

         </div>
        )
    }
}
export default ListItem;