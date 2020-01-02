import React from "react";
import ListItem from "./ListItem";
import '../Style/search.css'
class Search extends React.Component{

    constructor() {
        super();
        this.state={
            searchData:"",
            list:["first","second"]
        }

    }
    InputChange=(event)=>{
        this.setState({
            searchData:event.target.value
        });
    }
    addNote=(event)=>{
      console.log("key pressed")
        if(event.key==='Enter'){
            this.setState({
                list:this.state.list.concat(event.target.value),
                searchData:""
            });
        }
    }
    render() {
        return (
            <div>
                <input type="text" className={'searchBar'} value={this.state.searchData} onChange={this.InputChange} onKeyPress={this.addNote} />
                {this.state.list.map((value,index)=><ListItem data={value} key={index}/>)}
            </div>

        )
    }
}
export default Search