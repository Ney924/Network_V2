let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
                postData: [
                        {id:1, post:'Это мой первый пост', like: 5},
                        {id:2, post:'Привет, как дела?', like: 2},
                        {id:3, post:'Хуёво, денег нет', like: 10},
                      ],
                newPostText: '',
}



const profileReducer = (state = initialState, action) => {
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