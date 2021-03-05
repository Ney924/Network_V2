import React from 'react';


class ProfileStatus extends React.Component {
       
        state = {
                editMode: false,
        }
       
        activateEditMode () {
                this.setState({editMode: true})
        }
        
        deactivateEditMode () {
                this.setState({editMode: false})
        }

        render () { 
               return (
                        <div className='profile-status'>
                        {this.state.editMode===false
                                ?<div onDoubleClick={this.activateEditMode.bind(this)}>{this.props.aboutMe} </div>
                                :<input value={this.props.aboutMe} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>} 
                        
        </div>      
       )
}}


export default ProfileStatus;
