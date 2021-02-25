
import React from 'react';

class Suggestions extends React.Component {

    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        let value = e.target.innerHTML;
        this.props.update(value);
    }

    render() {
        let html = [];
        this.props.suggestions ? 
        this.props.suggestions.map((suggestion, index) => {
            html.push(<li key={index} className="suggestion" onClick={this.updateState}>{suggestion}</li>);
        }):null;

        return(
            <div className="suggestions">
                <ul>
                    {html}
                </ul>
            </div>
        );
    }
}

export default Suggestions;