import React from 'react';
import './MyPosts.css';
import Post from './Posts/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from "./../../../utils/validators/validator";
import { Input } from "./../../common/formsControls/formsControls";


const maxLenght100 = maxLenghtCreator(100)

const MyPosts = React.memo((props) => {

        let postsElemetnts = props.profilePage.postData.map((post) => <Post message={post.post} like={post.like} />)

        let onAddPost = (values) => {
                props.addPost(values.newPostText);
        }

        return (
                <div className='posts'>
                        <div>
                                <h3>Posts users</h3>
                        </div>
                        <MyPostsReduxForm onSubmit={onAddPost} />
                        {postsElemetnts}
                </div>
        );
})

export default MyPosts;


const MyPostsForm = (props) => {
        return (
                <form onSubmit={props.handleSubmit}>
                        <Field
                                placeholder='Добавить пост'
                                component={Input}
                                name='newPostText'
                                validate={[required, maxLenght100]}
                        />
                        <button>Add post</button>
                </form>
        )
}

const MyPostsReduxForm = reduxForm({ form: 'addPostForm' })(MyPostsForm)