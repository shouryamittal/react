import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.updateSuggestions = this.updateSuggestions.bind(this);
    }

    updateSuggestions(e) {
        let value = e.target.value;
        let suggestions=[];
        let regex = new RegExp(`^${value}`, `i`);
        if(value.length > 0) {
            this.props.cityNames.map((city) => {
                if(regex.test(city))
                    suggestions.push(city);
            });
        }
        this.props.update(suggestions, value);
    }

    render() {
        return(
            <div className="searchbar">
                <input type="text" onInput={this.updateSuggestions} value={this.props.text} placeholder="Enter City name"/>
            </div>
        );
    }
}
export default SearchBar;