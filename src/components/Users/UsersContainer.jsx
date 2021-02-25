import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalCountAC} from '../Redux/users-reducer';
import * as axios from 'axios';
import Users from "./Users";

class UsersContainer extends React.Component {

        componentDidMount() {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
                        .then( response => {
                                this.props.setUsers(response.data.items);
                                this.props.setTotalCount(response.data.totalCount);  
                        });
        }
        onPageChanged = (pageNumber) => {
                this.props.setCurrentPage(pageNumber);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
                        .then( response => {
                                this.props.setUsers(response.data.items);   
                        });
        }
        render () {     
        return (
                <Users
                        totalCount={this.props.totalCount}
                        pagesSize={this.props.pagesSize}
                        onPageChanged={this.onPageChanged}
                        unFollow={this.props.unFollow}
                        follow={this.props.follow}
                        usersData={this.props.usersData}
                />
        )}
}

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

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)

