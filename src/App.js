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
        userPersisted: json => dispatch(actionCreators.userPersisted(json))
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Users);

export default App;
