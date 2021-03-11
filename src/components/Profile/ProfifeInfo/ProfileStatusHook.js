import React, { useEffect, useState } from 'react';

const ProfileStatusHook = (props) => {
        const [editMode, setEditMode] = useState(false);
        const [status, setStatus] = useState(props.status);

        useEffect(() => {
                setStatus(props.status)
        }, [props.status])

        const activateEditMode = () => {
                setEditMode(true);
        }

        const deactivateEditMode = () => {
                props.updateUserStatusTC(status)
                setEditMode(false);
        }

        const onStatusChange = (e) => {
                setStatus(e.currentTarget.value)
        }

        return (
                <div className='profile-status'>
                        {editMode === false
                                ? <div
                                        className='profile-status-now'
                                        onDoubleClick={activateEditMode}>
                                        {status || 'No status'}
                                </div>
                                : <div className='profile-status-change'>
                                        <input
                                                onChange={onStatusChange}
                                                value={status}
                                                autoFocus={true}
                                        />
                                        <button onClick={deactivateEditMode}>Сохранить</button>
                                </div>
                        }
                </div>
        )
}

export default ProfileStatusHook;
