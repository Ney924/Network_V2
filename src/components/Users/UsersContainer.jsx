import React from 'react';
import './Users.css';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setTotalCount, setIsFetching, setUsersTC,onPageChangedTC, followTC, unFollowTC} from '../Redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';
import { getPagesSize, getUsers, getTotalCount, getCurrentPage, getIsFetching, getPortionSize, getFollowingInProgress } from '../Redux/users-selectors';



class UsersContainer extends React.Component {

        componentDidMount() {this.props.setUsersTC(this.props.currentPage, this.props.pagesSize)} 
        
        onPageChanged = (pageNumber) => {this.props.onPageChangedTC(pageNumber, this.props.pagesSize)}
        
        render () {     
                return (
                        <div className='users-comtainer'>
                                {this.props.isFetching ? <Preloader/> : null}
                                <Users
                                        totalCount={this.props.totalCount}
                                        pagesSize={this.props.pagesSize}
                                        onPageChanged={this.onPageChanged}
                                        usersData={this.props.usersData}
                                        followingInProgress={this.props.followingInProgress}
                                        followTC={this.props.followTC}
                                        unFollowTC={this.props.unFollowTC}
                                        portionSize={this.props.portionSize}
                                />
                        </div>
                )}
}

let mapStateToProps = (state) => {
        return {
                usersData: getUsers(state),
                pagesSize: getPagesSize(state),
                totalCount: getTotalCount(state),
                currentPage: getCurrentPage(state),
                isFetching: getIsFetching(state),
                portionSize: getPortionSize(state),
                followingInProgress: getFollowingInProgress(state),
        }
}

export default compose (connect(
        mapStateToProps, 
        {setUsers,setCurrentPage, setTotalCount, setIsFetching, setUsersTC, onPageChangedTC, followTC, unFollowTC}),
         withAuthRedirect)(UsersContainer)













         /* let isAuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect (mapStateToProps, 
        {setUsers, 
                setCurrentPage, setTotalCount, setIsFetching, 
                setUsersTC, onPageChangedTC, followTC, unFollowTC
        }) 
        (isAuthRedirectComponent) */

    
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