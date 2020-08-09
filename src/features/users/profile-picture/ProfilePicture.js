import React from 'react';
import { useSelector } from 'react-redux'
import { selectProfilePicture, selectUserName } from '../usersSlice'

import './profile-picture.styles.scss' 

export const ProfilePic = ({}) => {
    const profilePic = useSelector(selectProfilePicture)
    const userName = useSelector(selectUserName)
    
    return(
        <div className='profile-pic'>
            <img src={profilePic} alt={userName}/>
            <p>{userName}</p>
        </div>
    );
}