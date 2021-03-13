import React from 'react';
import './Users.css';

const UsersPageButton = (props) => {
        let pagesCount = Math.ceil(props.totalCount / props.pagesSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
        }
        return (
                <div className='button-page'>
                        {pages.map(c => {
                                return (
                                        <button
                                                className='one-button-page'
                                                onClick={() => props.onPageChanged(c)}>
                                                {c}
                                        </button>
                                )
                        })}
                </div>)
}

export default UsersPageButton