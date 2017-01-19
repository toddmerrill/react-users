import React from 'react'

function User(props) {
  return (
      <div>{props.user.firstName} {props.user.lastName}</div>
  );
}

const getStartState = () => {
   return {};
}

class Users extends React.Component {
    constructor() {
    super();
    this.state = getStartState();
  }

  handleNewGameClick(i) {
    this.setState(getStartState());
  }

 handleClick(i) {
    this.setState({});
  }

  render() {
    const user = {firstName: "Bob", lastName: "Jones"};
    return (
        <div>
            <User user={user} />
        </div>
    );
  }
}

export default Users;
