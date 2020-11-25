import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile, getStatus, setProfile, updateStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		const id = this.props.match.params.id || this.props.authReducer.id;
		if (!id)
			this.props.history.push('/login');
		this.props.getProfile(id);
		this.props.getStatus(id);
	}

	render() {
		// if (!this.props.match.params.id || !this.props.authReducer.id)
		// 	return <Redirect to='/login'/>;
		return <Profile profileReducer={this.props.profileReducer}
		                updateStatus={this.props.updateStatus}/>;
	}
}

const toDispatch = {setProfile, getProfile, getStatus, updateStatus};

const mapStateToProps = state => ({
	profileReducer: state.profileReducer,
	authReducer: state.authReducer
});

export default compose(
	connect(mapStateToProps, toDispatch),
	withRouter
)(ProfileContainer);