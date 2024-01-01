import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BACKEND_API } from '../../helper/helper'


export const initialState = {
    isLoading: false,
    error: null,
    TalentShowCaseList: [],
}

export const getTalentShowCaseList = createAsyncThunk('talentshowcase/getTalentShowCaseList', async () => {
    try { 
        const response = await axios({ url: `${BACKEND_API}/our-talent-showcase`, method: "get" })
        return response;
    } catch (err) {
        throw err
    }
})



export const TalentShowCaseSlice = createSlice({
    name: 'talentshowase',
    initialState,
    reducers: {
        ResetTalentShowCaseSlice: (state) => {
            state.PortfolioMessage = ""
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTalentShowCaseList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getTalentShowCaseList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.TalentShowCaseList = payload?.data?.data;
            // if (payload?.data?.products.length > 0) {
            // }
        });
        builder.addCase(getTalentShowCaseList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Some thing went wrong";
        });
        /////////////////////////////////


    }

})
export const { ResetTalentShowCaseSlice } = TalentShowCaseSlice.actions
export default TalentShowCaseSlice.reducer;