import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img id={p.bg_img} src="https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg"></img>
            </div>
            <div className = {p.discriptionBlock}>
                <p>discription</p>
            </div>
        </div>
    )
    
}

export default ProfileInfo;