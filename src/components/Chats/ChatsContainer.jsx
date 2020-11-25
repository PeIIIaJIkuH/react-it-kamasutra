import {connect} from 'react-redux';
import {sendMessage} from '../../redux/chats-reducer';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import Chats from './Chats';
import {compose} from 'redux';
import {getChatsReducer} from '../../redux/selectors';

const mapStateToProps = state => ({
	chatsReducer: getChatsReducer(state)
});

const toDispatch = {
	sendMessage
};

export default compose(connect(mapStateToProps, toDispatch), withAuthRedirect)(Chats);
