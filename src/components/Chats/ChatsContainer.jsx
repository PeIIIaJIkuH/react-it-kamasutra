import { connect } from 'react-redux';
import {
	sendMessageCreator,
	updateNewMessageCreator
} from '../../redux/chats-reducer';
import Chats from './Chats';

const mapStateToProps = state => ({
	chatsReducer: state.chatsReducer
});

const mapDispatchToProps = dispatch => ({
	sendMessage: () => {
		dispatch(sendMessageCreator());
	},
	updateNewMessage: text => {
		dispatch(updateNewMessageCreator(text));
	}
});

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats);

export default ChatsContainer;
