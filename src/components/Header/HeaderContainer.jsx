import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/auth-reducer';
import {getIsAuth, getLogin} from '../../redux/selectors';

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = state => {
	return {
		isAuth: getIsAuth(state),
		login: getLogin(state)
	};
};

export default connect(mapStateToProps, {logout})(HeaderContainer);
