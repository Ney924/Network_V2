import React from 'react';


class ProfileStatus extends React.Component {
       
        state = {
                editMode: false,
                status: this.props.status,
        }
       
        activateEditMode = () => {
                this.setState({editMode: true})
        }
        
        deactivateEditMode = () => {
                this.props.updateUserStatusTC(this.state.status)
                this.setState({editMode: false}) 
        }

        onStatusChange = (e) => {
                this.setState({
                        status: e.currentTarget.value
                })
        }

        componentDidUpdate(prevProps, prevState) {
                if (prevProps.status !== this.props.status) {
                        this.setState({
                                status: this.props.status
                        })
                }
        }

        render () { 
               return (
                        <div className='profile-status'>
                        {this.state.editMode===false
                                ?<div className='profile-status-now'
                                         onDoubleClick={this.activateEditMode}>
                                        {this.props.aboutMe||'No status'} 
                                </div>
                                :<div className='profile-status-change'>
                                        <input 
                                                onChange={this.onStatusChange}
                                                value={this.props.status} 
                                                onBlur={this.deactivateEditMode} 
                                                autoFocus={true}
                                        />
                                        <button>Сохранить</button>
                                </div>
                                } 
                        
        </div>      
       )
}}


export default ProfileStatus;
