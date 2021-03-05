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
                this.setState({editMode: false})
                this.props.updateUserStatusTC(this.state.status)
        }

        onStatusChange = (e) => {
                this.setState({
                        status: e.currentTarget.value
                })
        }

        render () { 
               return (
                        <div className='profile-status'>
                        {this.state.editMode===false
                                ?<div onDoubleClick={this.activateEditMode}>{this.props.aboutMe||'No status'} </div>
                                :<input 
                                        onChange={this.onStatusChange}
                                        value={this.props.aboutMe} 
                                        onBlur={this.deactivateEditMode} 
                                        autoFocus={true}
                                />} 
                        
        </div>      
       )
}}


export default ProfileStatus;
