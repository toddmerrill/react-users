import React from 'react'

const userList = {
    "users": [
        {
            "userId": "vrkkq9leh",
            "firstName": "Jane",
            "lastName": "Derane",
            "age": "111"
        }, {
            "userId": "qsgg0uv84",
            "firstName": "Kavita",
            "lastName": "Blalita",
            "age": "8"
        }, {
            "userId": "oi7i7lpte",
            "firstName": "Johnny",
            "lastName": "Blow",
            "age": "5455"
        }, {
            "userId": "k49e0vv9s",
            "firstName": "Daniel J.",
            "lastName": "Whaaa?",
            "age": "999"
        }, {
            "userId": "tutadlocy",
            "firstName": "Joe",
            "lastName": "Blow",
            "age": "333"
        }
    ]
}

function User(props) {
  return (
      <div className="leftlist"><h4>{props.user.firstName} {props.user.lastName}</h4></div>
  );
}

function UserForm(props) {
  return (
      <div className="col-md-6 content">
          <h2>Personal Information</h2>
          <form className="form-horizontal">
              <div className="form-group">
                  <label className="control-label" htmlFor="inputFirstName">First Name</label>
                  <div className="controls">
                      <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"
                             autofocus focus="focusInput" tabIndex="0" />
                  </div>
              </div>
              <div className="form-group">
                  <label className="control-label" htmlFor="inputLastName">Last Name</label>
                  <div className="controls">
                      <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
                  </div>
              </div>
              <div className="form-group">
                  <label className="control-label" htmlFor="inputAge">Age</label>
                  <div className="controls">
                      <input type="text" className="form-control" id="inputAge" placeholder="Age" />
                  </div>
              </div>
          </form>
      </div>
  );
}

function UserHeader(props) {
    return (
        <h2>Users
            <a className="btn btn-circle-plus">
                <span className="glyphicon glyphicon-plus-sign"></span>
            </a>
            <a className="btn btn-circle-minus">
                <span className="glyphicon glyphicon-minus-sign"></span>
            </a>
        </h2>
    );
}

function UserList(props) {
    const userList = props.users.map((user, index) => {return <User key={index} user={user}/>});
    return (
        <div>{userList}</div>
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
    return (
        <div>
        <div className="col-md-4">
            <UserHeader />
            <UserList users={userList.users}/>
        </div>
        <UserForm />
    </div>
    );
  }
}

export default Users;
