import React from 'react'
const R = require('ramda')
const usersApi = require('users-api');
const util = require('../util/user-util')

export const User = props => {
  let rowClass= props.isCurrentUser ? "listrow current-row" : "listrow";
  return (
      <div className={rowClass} onClick={() => props.onClick(props.user)}>
          {props.user.firstName} {props.user.lastName}
      </div>
  );
}

export const UserForm = props => {
  return (
      // class="col-md-6 content"
      <div className="rightList"class="col-md-6 content">
          <h2>Personal Information</h2>
          <form className="form-horizontal">
              <UserFormInput user={props.user} onBlur={props.onBlur} onChange={props.onChange} userClick={props.userClick}
                  fieldName="firstName" fieldLabel="First Name" focus={true} tabIndex="1"/>
              <UserFormInput user={props.user} onBlur={props.onBlur} onChange={props.onChange} userClick={props.userClick}
                  fieldName="lastName" fieldLabel="Last Name" tabIndex="2"/>
              <UserFormInput user={props.user} onBlur={props.onBlur} onChange={props.onChange} userClick={props.userClick}
                  fieldName="age" fieldLabel="Age" tabIndex="3"/>
          </form>
      </div>
  );
}

export const UserFormInput = props => {
  const onChange = e => props.onChange({...props.user, [e.target.name]: e.target.value});
  let inputClass= props.isUserClick ? "form-control current-inputField" : "form-control";
  return (
      <div className="form-group">
          <label className="controlLabel" class="control-label" htmlFor={'input'+props.fieldName}>{props.fieldLabel}</label>
          <div className="controls">
              <input name={props.fieldName} type="text" className={inputClass}
                     id={'input'+props.fieldName} placeholder={props.fieldLabel}
                     tabIndex={props.tabIndex} autoFocus={props.focus}
                     value={props.user[props.fieldName]} onChange={onChange} onBlur={() => props.onBlur(props.user)}/>
          </div>
      </div>
  );
}

export const UserHeader = props => {
    const deleteUser = () => {
        const newCurrentUser = props.users.length ? props.users[0] : null;
        props.removeUser(props.currentUser, newCurrentUser);
    }
    return (
        <div className="listHeader">
            <h2 className="oneLine">Users</h2>
            <span className="rightButtons">
                <a className="nohover addButton" onClick={() => props.addUser(util.newUser())}>Add User</a>
                <a className="nohover deleteButton" onClick={deleteUser}>Delete User</a>
            </span>
        </div>
    );
}

export const UserList = props => {
    const userList = props.users.map((user, index) => {
        const isCurrentUser = user.userId === props.currentUser.userId || false
        return <User key={user.userId} user={user} isCurrentUser={isCurrentUser} onClick={props.userClick}/>
    });
    return (
        <div className="listItems">{userList}</div>
    );
}

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log("Initial props", this.props);
  }
  render() {
    return (
    <div>
        <h1>Page Title</h1>
        <div className="leftList" class="col-md-4">
            <UserHeader addUser={this.props.addUser} removeUser={this.props.deleteUser}
                currentUser={this.props.currentUser} users={this.props.users.users}/>
            <UserList users={this.props.users.users} currentUser={this.props.currentUser} userClick={this.props.setCurrentUser}/>
        </div>
        <UserForm user={this.props.currentUser} onChange={this.props.updateUser} onBlur={this.props.persistUser} userClick={this.props.setCurrentInputField}/>
    </div>
    );
  }
}

export default Users;
