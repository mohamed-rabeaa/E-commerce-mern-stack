import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authSlice";
import cartSlice from "./reducers/cartSlice";
import CategorySlice from "./reducers/categorySlice";
import ProductSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";




export default configureStore({
  reducer: {
    auth: AuthReducer,
    category: CategorySlice,
    product: ProductSlice,
    cart: cartSlice,
    user: userSlice,
  }, 
});
