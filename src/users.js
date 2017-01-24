import React from 'react'
const R = require('ramda')

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
  let rowClass="listrow";
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
    const userList = props.users.map((user, index) => {return <User key={user.userId} user={user} onClick={props.userClick}/>});
    return (
        <div className="listItems">{userList}</div>
    );
}

const getStartState = () => {
    const firstUser = userList.users.length > 0 ? userList.users[0] : null;
   return {
       users: userList.users,
       currentUser: firstUser
   };
}

class Users extends React.Component {
  constructor() {
    super();
    this.state = getStartState();
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

 handleUserClick(user) {
     this.setState({currentUser: user});
     console.log('current-user:',this.state.currentUser.firstName, this.state.currentUser.lastName);
  }

  handleFormChange(e) {
      const changedUser = R.clone(this.state.currentUser);
      changedUser[e.target.name] = e.target.value;
      const users = this.state.users.map((user) => {
          return user.userId === changedUser.userId ? changedUser : user;
      });
      this.setState({users: users,
                     currentUser: changedUser});
  }

  render() {
    return (
        <div>
        <div className="leftList" class="col-md-4">
            <UserHeader />
            <UserList users={this.state.users} userClick={this.handleUserClick}/>
        </div>
        <UserForm user={this.state.currentUser} onChange={this.handleFormChange}/>
    </div>
    );
  }
}

export default Users;
