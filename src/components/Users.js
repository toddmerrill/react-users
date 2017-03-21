import React, { PropTypes } from 'react'
import R from 'ramda'
const usersApi = require('users-api');
const util = require('../util/user-util')

const userType = PropTypes.shape(
    {
        userId: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.string
    }
);

export const User = props => {
  const rowClass= props.isCurrentUser ? "listrow current-row" : "listrow";
  return (
      <div className={rowClass} onClick={() => props.onClick(props.user)}><h4>{props.user.firstName} {props.user.lastName}</h4></div>
  );
}

User.propTypes = {
    isCurrentUser: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    user: userType.isRequired
}

export const UserForm = props => {
  return (
      <div className="rightList">
          <h2>Personal Information</h2>
          <form className="form-horizontal">
              <UserFormInput user={props.user} onBlur={props.onBlur} onChange={props.onChange}
                  fieldName="firstName" fieldLabel="First Name" focus={true} tabIndex={1}/>
              <UserFormInput user={props.user} onBlur={props.onBlur} onChange={props.onChange}
                  fieldName="lastName" fieldLabel="Last Name" tabIndex={2}/>
              <UserFormInput user={props.user} onBlur={props.onBlur} onChange={props.onChange}
                  fieldName="age" fieldLabel="Age" tabIndex={3}/>
          </form>
      </div>
  );
}

UserForm.propTypes = {
    user: userType.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

export const UserFormInput = props => {
  const onChange = e => props.onChange({...props.user, [e.target.name]: e.target.value});
  return (
      <div className="form-group">
          <label className="controlLabel" htmlFor={'input'+props.fieldName}>{props.fieldLabel}</label>
          <div className="controls">
              <input name={props.fieldName} type="text" className="form-control"
                     id={'input'+props.fieldName} placeholder={props.fieldLabel}
                     tabIndex={props.tabIndex} autoFocus={props.focus}
                     value={props.user[props.fieldName]} onChange={onChange} onBlur={() => props.onBlur(props.user)}/>
          </div>
      </div>
  );
}

UserFormInput.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    user: userType.isRequired,
    fieldName: PropTypes.string.isRequired,
    fieldLabel: PropTypes.string.isRequired,
    tabIndex: PropTypes.number,
    focus: PropTypes.bool
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
                <a className="nohover" onClick={() => props.addUser(util.newUser())}>
                    <span className="btn-circle btn-ok" />
                </a>
                <a className="nohover" onClick={deleteUser}>
                    <span className="btn-circle btn-error" />
                </a>
            </span>
        </div>
    );
}

UserHeader.propTypes = {
    users: PropTypes.arrayOf(userType).isRequired,
    currentUser: userType.isRequired,
    removeUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired
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

UserList.propTypes = {
    users: PropTypes.arrayOf(userType).isRequired,
    currentUser: userType.isRequired,
    userClick: PropTypes.func.isRequired
}

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log("Initial props", props);
  }
  render() {
    return (
    <div>
        <div className="leftList" >
            <UserHeader addUser={this.props.addUser} removeUser={this.props.deleteUser}
                currentUser={this.props.currentUser} users={this.props.users.users}/>
            <UserList users={this.props.users.users} currentUser={this.props.currentUser} userClick={this.props.setCurrentUser}/>
        </div>
        <UserForm user={this.props.currentUser} onChange={this.props.updateUser} onBlur={this.props.persistUser}/>
    </div>
    );
  }
}

Users.propTypes = {
    addUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func,
    setCurrentUser: PropTypes.func,
    updateUser: PropTypes.func,
    persistUser: PropTypes.func,
    currentUser: userType,
    users: PropTypes.shape(
        {
            users: PropTypes.arrayOf(userType).isRequired
        }
    )
}

export default Users;
