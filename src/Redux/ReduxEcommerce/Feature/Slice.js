import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchAsyncProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
    
})

export const ecommerceSlice = createSlice({
    name:"ecommerce",
    initialState:{
        products:[],
        isLoading: false,
        isError: false 
    },
    reducers: {
        fetchProducts: (state) => {}
    },
    extraReducers: {
        [fetchData.pending] : (state) => {
            state.isLoading = true
            
        },

        [fetchData.fulfilled] : (state , action) => {
            state.isLoading = false;
            state.products = action.payload
        },

        [fetchData.rejected] : (state) => {
            state.isError = true
        }

    }
})

export const { fetchProducts } = ecommerceSlice.actions
export default ecommerceSlice.reducer