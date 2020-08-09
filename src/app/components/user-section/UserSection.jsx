import React from 'react'

import './userSection.styles.scss'

import { ProfilePic } from '../../../features/users/profile-picture/ProfilePicture'
import { CustomButton } from '../custom-button/CustomButton'

export const UserSection = () => (
    <section className="user-section">
        <ProfilePic/>
        <div className='button-section'>
          
            <CustomButton>
                FOLLOWING
            </CustomButton>
            <CustomButton>
                MY GIFTS
            </CustomButton>
        </div>
    </section>
)