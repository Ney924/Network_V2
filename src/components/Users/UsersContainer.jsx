import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC,} from '../Redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
        return {
                usersData: state.usersPage.usersData
        }
}

let mapDispatchToProps = (dispatch) => {
        return {
                follow: (userId) => {
                        dispatch(followAC(userId));
                },
                unFollow: (userId) => {
                        dispatch(unFollowAC(userId));
                },
                setUsers: (usersData) => {
                        dispatch(setUsersAC(usersData));
                },
        };
}

export default connect (mapStateToProps, mapDispatchToProps) (Users)

