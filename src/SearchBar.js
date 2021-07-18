import React from 'react'
import axios  from "axios";

export default class SearchBar extends React.Component
{
    constructor(props) {
        super(props);
    }

    handleSubmit= async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.searchTerm}`);
        this.props.addProfile(resp.data);
    }

    state={
        searchTerm:'',
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.searchTerm} onChange ={args => this.setState ({searchTerm: args.target.value})}/>
                <button>Add</button>
            </form>
        );
    }

}