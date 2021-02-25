import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalCountAC} from '../Redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
        debugger;
        return {
                usersData: state.usersPage.usersData,
                pagesSize: state.usersPage.pagesSize,
                totalCount: state.usersPage.totalCount,
                currentPage: state.usersPage.currentPage,
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
                setCurrentPage: (pageNumber) => {
                        dispatch(setCurrentPageAC(pageNumber));
                },
                setTotalCount: (totalCount) => {
                        dispatch(setTotalCountAC(totalCount));
                },
        };
}

export default connect (mapStateToProps, mapDispatchToProps) (Users)

