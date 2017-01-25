import React from 'react'
const R = require('ramda')
const usersApi = require('users-api');

function User(props) {
  let rowClass= props.isCurrentUser ? "listrow current-row" : "listrow";
  return (
      <div className={rowClass} onClick={() => props.onClick(props.user)}><h4>{props.user.firstName} {props.user.lastName}</h4></div>
  );
}

function UserForm(props) {
  return (
      <div className="rightList" class="col-md-6 content">
          <h2>Personal Information</h2>
          <form className="form-horizontal">
              <div className="form-group">
                  <label className="controlLabel" class="control-label" htmlFor="inputFirstName">First Name</label>
                  <div className="controls">
                      <input name="firstName" type="text" className="form-control" id="inputFirstName" placeholder="First Name"
                             autofocus focus="focusInput" tabIndex="0" value={props.user.firstName} onChange={props.onChange}/>
                  </div>
              </div>
              <div className="form-group">
                  <label className="control-label" htmlFor="inputLastName">Last Name</label>
                  <div className="controls">
                      <input name="lastName" type="text" className="form-control" id="inputLastName" placeholder="Last Name"
                      value={props.user.lastName} onChange={props.onChange} />
                  </div>
              </div>
              <div className="form-group">
                  <label className="control-label" htmlFor="inputAge">Age</label>
                  <div className="controls">
                      <input name="age" type="text" className="form-control" id="inputAge" placeholder="Age"
                      value={props.user.age} onChange={props.onChange}/>
                  </div>
              </div>
          </form>
      </div>
  );
}

function UserHeader(props) {
    return (
        <div className="listHeader">
            <h2 className="oneLine">Users</h2>
            <span className="rightButtons">
            <a className="nohover">
                <span className="btn-circle btn-ok" />
            </a>
            <a className="nohover">
                <span className="btn-circle btn-error" />
            </a>
            </span>
        </div>
    );
}

function UserList(props) {
    const userList = props.users.map((user, index) => {
        const isCurrentUser = user.userId === props.currentUser.userId || false
        return <User key={user.userId} user={user} isCurrentUser={isCurrentUser} onClick={props.userClick}/>
    });
    return (
        <div className="listItems">{userList}</div>
    );
}

function retrieveUsersState(component) {
    usersApi.retrieveUsers(function success(response) {
        console.log('GET Result: ' + JSON.stringify(response));
        this.setState({
            users: response.users,
            currentUser: (response.users && response.users.length > 0)
                            ? response.users[0] : null
        })
    }.bind(component), function error(response) {
        console.log('HTTP GET failed: ' + JSON.stringify(response));
    }.bind(component));
}

function saveUser(component, user) {
    usersApi.saveUser(function(response) {
        if (!response.userId) {
            console.log("ERROR! AWS returned empty user object.")
            return
        }
        const savedUser = response;
        const currentUserIndex = R.findIndex(R.propEq('userId', this.state.currentUser.userId), this.state.users);
        const userList = R.update(currentUserIndex, savedUser, this.state.users);
        this.setState({
            users: userList,
            currentUser: savedUser
        });
        console.log('saved user: ' + JSON.stringify(savedUser));
    }.bind(component),
    function(response) {
        console.log('HTTP POST failed: ' + JSON.stringify(response));
    }.bind(component),
    user);
};

class Users extends React.Component {
  constructor() {
    super();
    this.state = { users: [], currentUser: {} };
    retrieveUsersState(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

 handleUserClick(user) {
     this.setState({currentUser: user});
  }

  handleFormChange(e) {
      console.log('handling form change')
      const changedUser = R.clone(this.state.currentUser);
      changedUser[e.target.name] = e.target.value;
      saveUser(this, changedUser);
  }

  render() {
    return (
        <div>
        <div className="leftList" class="col-md-4">
            <UserHeader />
            <UserList users={this.state.users} currentUser={this.state.currentUser} userClick={this.handleUserClick}/>
        </div>
        <UserForm user={this.state.currentUser} onChange={this.handleFormChange}/>
    </div>
    );
  }
}

export default Users;
