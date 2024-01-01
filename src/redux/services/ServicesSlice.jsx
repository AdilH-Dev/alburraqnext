import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    ServicesList: [],
}

export const getServicesList = createAsyncThunk('services/getServicesList', async () => {
    try {
        const response = await axios({ url: `${BACKEND_API}/services`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const ServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        ResetServicesSlice: (state) => {
            state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getServicesList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getServicesList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.ServicesList = payload?.data?.data;
        });
        builder.addCase(getServicesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetServicesSlice } = ServicesSlice.actions
export default ServicesSlice.reducer;