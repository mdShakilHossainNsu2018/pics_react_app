import React from 'react';


class SearchBar extends React.Component {

    state = {value: ""};

    onInputChange = (event) => {
        this.setState({value: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value)
    };

    render() {
        return (<div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="input"> Image Search: </label>
                    <input type="text" value={this.state.value} onChange={this.onInputChange}/>
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;

