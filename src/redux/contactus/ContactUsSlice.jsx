import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'

export const initialState = {
    isLoading: false,
    error: null,
    FormMessage: [],
}

export const addMessage = createAsyncThunk('contactus/addMessage', async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await axios.post(`${BACKEND_API}/message`, data, config)
        return response;
    } catch (err) {
        throw err
        // return err
    }
})



export const ContactUsSlice = createSlice({
    name: 'contactus',
    initialState,
    reducers: {
        ResetContactUsSlice: (state) => {
            state.error = ""
            state.FormMessage = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addMessage.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addMessage.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.FormMessage = payload?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(addMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetContactUsSlice } = ContactUsSlice.actions
export default ContactUsSlice.reducer;