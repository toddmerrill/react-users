import React from 'react';

const Main = React.createClass({
    // header and footer will go in this component
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})

export default Main;
