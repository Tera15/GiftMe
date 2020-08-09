import React from 'react'

import './userSection.styles.scss'

import { ProfilePic } from '../../../features/users/profile-picture/ProfilePicture'
import { CustomButton } from '../custom-button/CustomButton'

export const UserSection = () => (
    <section className="user-section">
        <ProfilePic/>
        <div className='add-gift-button'>
            <CustomButton>
                ADD GIFT
            </CustomButton>
        </div>
    </section>
)