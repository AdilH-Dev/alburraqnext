import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    NewsLetterMessage: [],
}

export const Newsletter = createAsyncThunk('newsletter/Newsletter', async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await axios.post(`${BACKEND_API}/newsletters`, data, config)
        return response;
    } catch (err) {
        throw err
        // return err
    }
})



export const NewsletterSlice = createSlice({
    name: 'newsletter',
    initialState,
    reducers: {
        ResetNewsletterSlice: (state) => {
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(Newsletter.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(Newsletter.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.NewsLetterMessage = payload?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(Newsletter.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetNewsletterSlice } = NewsletterSlice.actions
export default NewsletterSlice.reducer;