import {connect} from 'react-redux';
import {addPost} from '../../../redux/profile-reducer';
import Posts from './Posts';
import {getProfileReducer} from '../../../redux/selectors';

const mapStateToProps = state => ({
	profileReducer: getProfileReducer(state)
});

const toDispatch = {addPost};

const PostsContainer = connect(mapStateToProps, toDispatch)(Posts);

export default PostsContainer;
