let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
                usersData: [],
                pagesSize: 50,
                totalCount: 0,
                currentPage: 1,
};


const usersReducer = (state = initialState, action) => {
        switch (action.type) {
                case FOLLOW:
                        return {
                                ...state,
                                usersData: state.usersData.map(u=> {
                                        if (u.id === action.userId){
                                                return {...u, follow: true}; 
                                        }
                                        return u; 
                                }),
                        }  
                case UNFOLLOW: 
                        return {
                                ...state,
                                usersData: state.usersData.map(u=> {
                                        if (u.id === action.userId){
                                                return {...u, follow: false}; 
                                        }
                                        return u; 
                                }),
                        } 
                case SET_USERS: 
                        return {
                                ...state, usersData: [...action.users]
                        }
                case SET_CURRENT_PAGE: 
                        return {
                                ...state, currentPage: action.currentPage
                        }
                case SET_TOTAL_COUNT: 
                        return {
                                ...state, totalCount: action.totalCount
                        }
                default:
                        return state;
        }
}

export let followAC = (userId) => {
        return { type: FOLLOW, userId }
}
export let unFollowAC = (userId) => {
        return { type: UNFOLLOW, userId }
}
export let setUsersAC = (users) => {
        return { type: SET_USERS, users }
}
export let setCurrentPageAC = (currentPage) => {
        return { type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalCountAC = (totalCount) => {
        return { type: SET_TOTAL_COUNT, totalCount}
}

export default usersReducer;







//!usersData
/* 
                        {
                                id: 1, 
                                fullName: 'Ilya', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Зачем я ваще сюда полез',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {
                                id: 2, 
                                fullName: 'Anna', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Чтобы мы с тобой жили как люди',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {
                                id: 3, 
                                fullName: 'Aleksey', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Хватит ныть и занимайся',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {
                                id: 4, 
                                fullName: 'Egor', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Пойду пивка дам',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {
                                id: 5, 
                                fullName: 'Konstantin', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Ремонт делать не лучше',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        }, */