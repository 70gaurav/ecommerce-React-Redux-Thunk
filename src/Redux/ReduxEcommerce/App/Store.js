import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import ecommerceReducer from "../Feature/Slice"

export default configureStore({
    reducer: {
        ecommerce : ecommerceReducer,
    },
    middleware: [thunk]
})
