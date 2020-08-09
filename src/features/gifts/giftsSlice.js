import { createSlice } from '@reduxjs/toolkit'
let initialState = [
    {
        id: 11,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 13,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 14,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 15,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
        id: 16,
        userId: 12,
        url: 'https://amazon.ca',
        image: 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
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