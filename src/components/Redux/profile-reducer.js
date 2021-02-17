let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
        switch (action.type) {
                case ADD_POST:
                        let newPost = {
                                id: 5,
                                post: state.newPostText ,
                                like: 0,
                        } 
                        state.postData.push(newPost);
                        state.newPostText='';
                        return state; 
                case UPDATE_NEW_POST_TEXT:
                        state.newPostText = action.newText;
                        return state; 
                default:
                        return state;   
        }
}

export let addPostActionCreator = () => {
        return {
          type: ADD_POST, 
        }
      }
      export let onPostChangeActionCreator = (text) => {
        return {
          type: UPDATE_NEW_POST_TEXT, 
          newText: text,
        }
      }

export default profileReducer;