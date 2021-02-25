import React from 'react';
import './Users.css';
import * as axios from 'axios';
import noAvatar from './../assets/images/no_avatar.png';

class Users extends React.Component {

        componentDidMount() {
                axios.get('https://social-network.samuraijs.com/api/1.0/users')
                        .then( response => {
                                this.props.setUsers(response.data.items);   
                        });
        }

        render () {
                return <div> 
                        <div>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
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