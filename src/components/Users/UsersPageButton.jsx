import React, { useState } from 'react';
import './UsersPageButton.css';

const UsersPageButton = (props) => {
        let pagesCount = Math.ceil(props.totalCount / props.pagesSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
        }

        const portionCount = Math.ceil(pagesCount / props.portionSize)
        const [portionNumber, setPortionNumber] = useState(1)
        const leftBorder = (portionNumber - 1) * props.portionSize + 1
        const rightBorder = portionNumber * props.portionSize

        return (
                <div className='button-page'>
                        <button
                                className='one-button-page next-portion'
                                onClick={() => setPortionNumber(portionNumber - 1)}
                                disabled={portionNumber === 1}
                        >
                                Назад
                        </button>
                        <div className='portion-button'>
                                {pages.filter(p => p >= leftBorder && p <= rightBorder).map(c => {
                                        return (
                                                <button
                                                        key={c}
                                                        className='one-button-page'
                                                        onClick={() => props.onPageChanged(c)}>
                                                        {c}
                                                </button>
                                        )
                                })}
                        </div>
                        <button
                                className='one-button-page next-portion'
                                onClick={() => setPortionNumber(portionNumber + 1)}
                                disabled={portionNumber === portionCount}
                        >
                                Дальше
                        </button>
                </div>)
}

export default UsersPageButton;