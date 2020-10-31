import { connect } from 'react-redux';
import {
	addPostCreator,
	updateNewPostCreator
} from '../../../redux/profile-reducer';
import Posts from './Posts';

const mapStateToProps = state => ({
	profileReducer: state.profileReducer
});

const mapDispatchToProps = dispatch => ({
	addPost: () => {
		dispatch(addPostCreator());
	},
	updateNewPost: text => {
		dispatch(updateNewPostCreator(text));
	}
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
