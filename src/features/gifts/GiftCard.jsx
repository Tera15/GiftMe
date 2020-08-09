import React from 'react'
import { useSelector } from 'react-redux'

import './gift-card.styles.scss'

export const GiftCard = () => {
    const gift = useSelector(state => state.gifts[0])
   const { description, id, image, price, url, itemName, userId} = gift
    return (
        <div className="gift-card">
            <div className="gift-image">
                <img src={image} alt="Gift"/>
            </div>   
            <div className="gift-info">
            <h3>{itemName}</h3>
                <p>{description}</p>
                <div className='purchase-and-price'>
                <a href={url} rel='nofollow'>purchase</a>
                <span className='price'>${price}</span>
                </div>
            </div>
        </div>
    );
}