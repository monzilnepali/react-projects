import React, {Component} from 'react';
import StoryElement from "./StoryElement";

class Story extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id:props.id,
            storyId: props.storyId,
            story:{},
            status:false //render story element only after getting story data
        }
    }
    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/item/'+this.state.storyId+'.json')
            .then(response=>response.json())
            .then((data)=>this.setState({
                story:this.formatData(data),
                status:true
            }))
    }
    formatData({ title,time,url,score,by,descendants}){
        return {title,time,url,score,by,descendants}

    }
    render() {
        return (
            <>
             {this.state.status?<StoryElement index={this.state.id} story={this.state.story}/>:null}
            </>

        );
    }
}

export default Story;