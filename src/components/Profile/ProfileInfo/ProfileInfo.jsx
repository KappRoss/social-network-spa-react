import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';


const ProfileInfo = (props) => {
    
    if(!props.profile){
        return <Preloader />
    }
    
    return(
        <div>
            {/* <div>
                <img id={p.bg_img} src="https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg"></img>
            </div> */}
            <div className = {p.discriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                {/* <p>{props.profile.aboutMe}</p> */}
                <ProfileStatusWithHooks    
                    status = {props.status}
                    updateUserStatus = {props.updateUserStatus}
                />
            </div>
        </div>
    )
    
}

export default ProfileInfo;