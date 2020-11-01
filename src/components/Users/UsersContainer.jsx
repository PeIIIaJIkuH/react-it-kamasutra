import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = state => ({
	usersReducer: state.usersReducer
});

const mapDispatchToProps = dispatch => ({
	follow: id => {
		dispatch(followAC(id));
	},
	unfollow: id => {
		dispatch(unfollowAC(id));
	},
	setUsers: users => {
		dispatch(setUsersAC(users));
	}
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
