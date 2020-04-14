import React  from 'react';
import p from './ProfileInfo.module.css';
import { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
 
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
    
    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        
    }
        return(
            <div> 
            {!editMode 
            ?
                <div>
                    <span onDoubleClick = {activateMode}>{props.status || "-"}</span>
                </div>
            :
            <div>
                <input 
                    onBlur = {deactivateEditMode}
                    autoFocus = { true} 
                    onChange = {onStatusChange}
                    value = {status}
                ></input>
            </div>
            }
            </div>
        )
    }
  


export default ProfileStatusWithHooks;