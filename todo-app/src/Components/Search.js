import React, {Component} from 'react';

class Search extends Component {

    render() {
        return (
            <input type="text" className={'add-note search-bar'} placeholder={'search here..'} onChange={this.props.handler}/>
        );
    }
}

export default Search;