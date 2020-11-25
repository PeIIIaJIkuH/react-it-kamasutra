import {connect} from 'react-redux';
import {
	follow,
	getUsers,
	onPageChange,
	setCurrentPage,
	toggleFollowingInProgress,
	unfollow
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {getUsersReducer} from '../../redux/selectors';

class UsersContainer extends React.Component {
	componentDidMount = () => {
		this.props.getUsers(this.props.usersReducer.currentPage, this.props.usersReducer.pageSize);
	};

	onPageChange = (pageNumber) => {
		this.props.onPageChange(pageNumber, this.props.usersReducer.pageSize);
	};

	render() {
		return (
			<React.Fragment>
				{this.props.usersReducer.isFetching && <Preloader/>}
				<Users usersReducer={this.props.usersReducer} follow={this.props.follow}
				       unfollow={this.props.unfollow} onPageChange={this.onPageChange}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	usersReducer: getUsersReducer(state)
});

const toDispatch = {follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers, onPageChange};

export default connect(mapStateToProps, toDispatch)(UsersContainer);