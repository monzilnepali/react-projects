import React from 'react'
import './styles/App.css'
import Story from "./components/Story";

class App extends  React.Component{
  constructor() {
    super();
    this.state={
      storyIds:[]
    }
  }
  componentDidMount() {
   //calling api request
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(data => this.setState({
          storyIds:this.state.storyIds.concat(data)
        }));
  }

  render() {
    return(
        <div className={'story-container'}>
          <h1>News</h1>
        {this.state.storyIds.map((storyId,index)=><Story id={index} storyId={storyId} key={storyId} />)}
        </div>
    )
  }
}
export default  App;