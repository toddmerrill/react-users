import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/userActions';
import Users from './users';

function mapStateToProps(state) {
    return {
        users: {...state.users},
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser: user => {
            dispatch(actionCreators.updateUser(user))
            dispatch(actionCreators.setCurrentUser(user))
        },
        setCurrentUser: user => dispatch(actionCreators.setCurrentUser(user)),
        fetchUsers: () => dispatch(actionCreators.fetchUsers()),
        receiveUsers: json => dispatch(actionCreators.receiveUsers(json)),
        requestPersistUser: () => dispatch(actionCreators.requestPersistUser()),
        persistUser: user => dispatch(actionCreators.persistUser(user)),
        userPersisted: json => dispatch(actionCreators.userPersisted(json)),
        addUser: user => {
            dispatch(actionCreators.addUser(user))
            dispatch(actionCreators.setCurrentUser(user))
            // dispatch(actionCreators.persistUser(user))
        },
        deleteUser: user => {
            console.log('dispatching delete user', user)
            dispatch(actionCreators.deleteUser(user))
            dispatch(actionCreators.setCurrentUser(null))
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Users);

export default App;
