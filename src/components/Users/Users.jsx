import React from 'react';
import './Users.css';
import * as axios from 'axios';
import noAvatar from './../assets/images/no_avatar.png';

class Users extends React.Component {

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

        let pagesCount = Math.ceil(this.props.totalCount/this.props.pagesSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++ ) {
                pages.push(i);
        }
                debugger;
                return <div> 
                        <div className='button-page'>
                                {pages.map(c => {
                                        
                                        return <button 
                                        className='one-button-page'
                                        onClick={()=> this.onPageChanged(c)}>
                                                {c}
                                        </button>
                                })}
                        </div>

                        {this.props.usersData.map(u => 
                                        <div className='users' key={u.id}>
                                                <div className='users-avatar'>
                                                        <div>{u.photos.small !=null ? u.photos.small : noAvatar}</div>
                                                        <div>
                                                                {u.follow 
                                                                        ? <button onClick={ ()=> {this.props.unFollow(u.id)}}>Подписаться</button>
                                                                        : <button onClick={ ()=> {this.props.follow(u.id)}}>Отписаться</button>
                                                                }
                                                        </div>
                                                </div>
                                                <div className='users-name'>
                                                        <div>{u.name}</div>
                                                        <div className='status'>{u.status}</div>
                                                </div>
                                                <div className='users-locaton'>
                                                        <div>{'u.location.country'}</div>
                                                        <div>{'u.location.city'}</div>
                                                </div>
                                        </div>
                                )
                        }
                 </div>
                
        }


}

export default Users;