import React, { Component } from 'react';

export class Search extends Component {
state = {
    text: ''
};

onSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: ''});
}
                                  // e.target.name will fire the onchange for all form inputs
onChange = (e) => this.setState({ [e.target.name]: e.target.value});


    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="search"><strong>Search Database</strong> </label>
                    <input 
                    id="search"
                    type="text" 
                    name="text" 
                    placeholder="Search Actors..."
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search