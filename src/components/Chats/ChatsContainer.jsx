import { connect } from 'react-redux';
import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';
import Chats from './Chats';

const mapStateToProps = state => ({
	chatsReducer: state.chatsReducer
});

const mapDispatchToProps = dispatch => ({
	sendMessage: () => {
		dispatch(sendMessageAC());
	},
	updateNewMessage: text => {
		dispatch(updateNewMessageAC(text));
	}
});

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats);

export default ChatsContainer;
