import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, 
        setTotalCount, setIsFetching, setUsersTC,
         onPageChangedTC, followTC, unFollowTC} from '../Redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/preloader/Preloader';



class UsersContainer extends React.Component {

        componentDidMount() {this.props.setUsersTC(this.props.currentPage, this.props.pagesSize)} 
        
        onPageChanged = (pageNumber) => {this.props.onPageChangedTC(pageNumber, this.props.pagesSize)}
        
        render () {     
                return (
                        <>
                                {this.props.isFetching ? <Preloader/> : null}
                                <Users
                                        totalCount={this.props.totalCount}
                                        pagesSize={this.props.pagesSize}
                                        onPageChanged={this.onPageChanged}
                                        usersData={this.props.usersData}
                                        followingInProgress={this.props.followingInProgress}
                                        followTC={this.props.followTC}
                                        unFollowTC={this.props.unFollowTC}
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
                isAuth: state.auth.isAuth,
        }
}

export default connect (mapStateToProps, 
        {setUsers, 
                setCurrentPage, setTotalCount, setIsFetching, 
                setUsersTC, onPageChangedTC, followTC, unFollowTC
        }) 
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