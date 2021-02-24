import React from 'react';
import './Users.css';


let Users = (props) => {
        if (props.usersData.length === 0)
                {
                        props.setUsers([
                        {       id: 1, 
                                fullName: 'Ilya', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Зачем я ваще сюда полез',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {       id: 2, 
                                fullName: 'Anna', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Чтобы мы с тобой жили как люди',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {       id: 3, 
                                fullName: 'Aleksey', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Хватит ныть и занимайся',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {       id: 4, 
                                fullName: 'Egor', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Пойду пивка дам',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                        {       id: 5, 
                                fullName: 'Konstantin', 
                                avatarUsers: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU', 
                                follow: true, 
                                statusUsers: 'Ремонт делать не лучше',
                                location: {
                                        city: 'Moscau',
                                        country: 'Russian'
                                },
                        },
                ],
                ) 
        }           
        
        return (
                <div> 
                        {props.usersData.map(u => 
                                        <div className='users' key={u.id}>
                                                <div className='users-avatar'>
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93hT0wZKzLDrIruoP03lcSVjIm1ilEp9VeQ&usqp=CAU"/>
                                                        <div>
                                                                {u.follow 
                                                                        ? <button onClick={ ()=> {props.unFollow(u.id)}}>Подписаться</button>
                                                                        : <button onClick={ ()=> {props.follow(u.id)}}>Отписаться</button>
                                                                }
                                                                
                                                        </div>
                                                </div>
                                                <div className='users-name'>
                                                        <div>{u.fullName}</div>
                                                        <div className='status'>{u.status}</div>
                                                </div>
                                                <div className='users-locaton'>
                                                        <div>{u.location.country}</div>
                                                        <div>{u.location.city}</div>
                                                </div>
                                        </div>
                                )}
                 </div>
        )
       
}

export default Users