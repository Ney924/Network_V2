import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setCurrentPage, setTotalCount, setIsFetching, toggleFollowingProgress} from '../Redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/preloader/Preloader';
import {componentAPI } from '../api/api';

class UsersContainer extends React.Component {

        componentDidMount() {
                this.props. setIsFetching(true);             
                componentAPI.getUsersPage(this.props.currentPage, this.props.pagesSize).then(data => {
                        this.props. setIsFetching(false)
                        this.props.setUsers(data.items);
                        this.props.setTotalCount(data.totalCount); 
                });
        }
        onPageChanged = (pageNumber) => {
                this.props.setCurrentPage(pageNumber);
                this.props. setIsFetching(true);                   
                componentAPI.getUsersPage(pageNumber, this.props.pagesSize).then(data => {
                        this.props. setIsFetching(false)
                        this.props.setUsers(data.items);   
                });
        }
        render () {     
        return (
                <>
                        {this.props.isFetching ? <Preloader/> : null}
                        <Users
                                totalCount={this.props.totalCount}
                                pagesSize={this.props.pagesSize}
                                onPageChanged={this.onPageChanged}
                                unFollow={this.props.unFollow}
                                follow={this.props.follow}
                                usersData={this.props.usersData}
                                toggleFollowingProgress={this.props.toggleFollowingProgress}
                                followingInProgress={this.props.followingInProgress}
                        />
                </>
        )}
}

let mapStateToProps = (state) => {
        return {
                usersData: state.usersPage.usersData,
                pagesSize: state.usersPage.pagesSize,
                totalCount: state.usersPage.totalCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching,
                followingInProgress: state.usersPage.followingInProgress,
        }
}

export default connect (mapStateToProps, 
        {follow, unFollow, setUsers, setCurrentPage, setTotalCount, setIsFetching, toggleFollowingProgress,}) 
        (UsersContainer)








        
//! Диспатчи, записаные по старому (может пригодится)
/*1 let mapDispatchToProps = (dispatch) => {
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
                setIsFetching: (isFetching) => {
                        dispatch(setIsFetchingAC(isFetching));
                },
        };
} */

 /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`, {withCredentials: true}) */
 /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`, {withCredentials: true}) */