import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    ServicesDetailList: [],
}

export const getServicesDetailList = createAsyncThunk('services/getServicesDetailList', async (id) => {
    try {
        const response = await axios({ url: `${BACKEND_API}/services/${id}`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const ServicesDetailSlice = createSlice({
    name: 'servicesDetail',
    initialState,
    reducers: {
        ResetServicesDetailSlice: (state) => {
            state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getServicesDetailList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getServicesDetailList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.ServicesDetailList = payload?.data?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(getServicesDetailList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetServicesDetailSlice } = ServicesDetailSlice.actions
export default ServicesDetailSlice.reducer;