import React from "react";
import '../Style/listItem.css'
class ListItemDefaultBg extends React.Component{
    render() {
        return (
            <div className={'default-bg'}>
                <h2>You don't have any tasks yet. Create a new one.</h2>
            </div>
        );
    }
}
export default ListItemDefaultBg;