import React from "react";
import '../Style/listItem.css'
class ListItem extends React.Component{

    render() {
        return(
           <li className={'list'} key={this.props.index}>{this.props.data}</li>
        )
    }
}
export default ListItem;