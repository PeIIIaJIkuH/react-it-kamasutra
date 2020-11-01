import { connect } from 'react-redux';
import { addPostAC, updateNewPostAC } from '../../../redux/profile-reducer';
import Posts from './Posts';

const mapStateToProps = state => ({
	profileReducer: state.profileReducer
});

const mapDispatchToProps = dispatch => ({
	addPost: () => {
		dispatch(addPostAC());
	},
	updateNewPost: text => {
		dispatch(updateNewPostAC(text));
	}
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
