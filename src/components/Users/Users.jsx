import React from 'react';
import './Users.css';
import UsersPageButton from './UsersPageButton';
import User from './User';

let Users = (props) => {
        return (
                <div className='users-page'>
                        <UsersPageButton
                                totalCount={props.totalCount}
                                pagesSize={props.pagesSize}
                                onPageChanged={props.onPageChanged}
                        />
                       {props.usersData.map(u => <User
                                key={u.id}
                                followingInProgress={props.followingInProgress}
                                unFollowTC={props.unFollowTC}
                                followTC={props.followTC}
                                usersData={u}
                        />)}
                </div>
        )
}

export default Users



/* let Users = (props) => {
debugger
        return (
                <div className='users-page'>
                        <UsersPageButton
                                totalCount={props.totalCount}
                                pagesSize={props.pagesSize}
                                onPageChanged={props.onPageChanged}
                        />
                        {props.usersData.map(u =>
                                <div className='users' key={u.id}>
                                        <div className='users-avatar'>
                                                <NavLink to={'/profile/' + u.id}>
                                                        <div> {u.photos.small == null ?
                                                                <img src={noAvatar} /> :
                                                                <img src={u.photos.small} />
                                                        }
                                                        </div>
                                                </NavLink>
                                                <div className='users-follow-button'>
                                                        {u.follow
                                                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                                        onClick={() => { props.followTC(u.id) }}>Отписаться</button>
                                                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                                        onClick={() => { props.unFollowTC(u.id) }}>Подписаться</button>
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
        )
}

export default Users  */

