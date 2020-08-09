import { createSlice } from '@reduxjs/toolkit'
let initialState = [
    {
        id: 11,
        itemName: 'Sweater',
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        price: 1,
        description: 'Color: red, Size: xl'
    },
    {
        id: 13,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        price: 2,
        description: 'this is a product description about a really cool sweater. size:xl adsadadadadasada'
    },
    {
        id: 14,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        price: 3,
        description: 'this is a product description about a really cool sweater. size:xl adsadadadadasada'
    },
    {
        id: 15,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        price: 4,
        description: 'this is a product description about a really cool sweater. size:xl adsadadadadasada'
    },
    {
        id: 16,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        price: 5,
        description: 'this is a product description about a really cool sweater. size:xl adsadadadadasada'
    }
//ARRAY END
]
const giftsSlice = createSlice({
    name: 'gifts',
    initialState,
    reducers:{},
    extraReducers:{}

})
    // actions are written inside the reducers
// export const {} = giftsSlice.actions
export default giftsSlice.reducer

//write selectors down here when needed :) 
