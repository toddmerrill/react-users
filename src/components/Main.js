import React from 'react';

const Main = React.createClass({
    render() {
        return (
            <div>
                // header and footer will go in this component
                {this.props.children}
            </div>
        )
    }
})

export default Main;
