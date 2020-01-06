import React, {Component} from 'react';
import '../styles/StoryElement.css'
import ArrowIcon from '../assets/arrow-up.svg'
import ClockIcon from '../assets/clock.svg'
import UserIcon from '../assets/user.svg'
import CommentIcon from '../assets/comment.svg'
class StoryElement extends Component {
    render() {
        return (
            <div className='card'>
                <div className='id'>{this.props.index+1+'.'}</div>
                <div className='vote'>
                    <img src={ArrowIcon} alt="" className="icon"/>
                    <p className={'vote-num'}> {this.props.story.score}</p>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href={this.props.story.url} className='link'>{this.props.story.title}</a>
                <div className="author">
                    <img src={UserIcon} className={'icon'} alt=""/>
                    <p>{this.props.story.by}</p>
                </div>
                <div className='date'>
                    <img src={ClockIcon} className={'icon'} alt=""/>
                    <p className={'date-value'}>{ new Date(this.props.story.time*1000).toDateString() }</p>
                    {/*converting timestamp into millisecond*/}
                </div>
                <div className="comment">
                    <img src={CommentIcon} className={'icon'} alt=""/>
                    <p>{this.props.story.descendants}</p>
                </div>
            </div>
        );
    }
}

export default StoryElement;