import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";
const SERVER_URL = process.env.REACT_APP_BASE_URL

const Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}` || "";

const header = { headers: { Authorization } };

//const SERVER_URL = config.apiUrl

export const getCart = createAsyncThunk(
    "product/getProduct",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.get(
                `${SERVER_URL}/cart/getCart/`,
                header
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const addItem = createAsyncThunk(
    "product/addItem",
    async ({ id }, thunkApi) => {
        const data = { cartItems: [{ product: id }] }
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/cart/add`,
                data,
                {
                    headers: {
                        Authorization: Authorization
                    }
                }
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const increase = createAsyncThunk(
    "product/increase",
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/cart/increase/${id}`,
                { data: {} },
                {
                    headers: {
                        Authorization: Authorization
                    }
                }
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const dicrease = createAsyncThunk(
    "product/dicrease",
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/cart/dicrease/${id}`,
                { data: {} },
                {
                    headers: {
                        Authorization: Authorization
                    }
                }
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.delete(
                `${SERVER_URL}/cart/removeProduct/${id}`,
                header
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const remove = createAsyncThunk(
    "product/remove",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.delete(
                `${SERVER_URL}/cart/`,
                header
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: [],
        cart: {},
        cartResMsg: "",
        cartError: [],
        cartLoading: false
    },
    reducers: ({}),
    extraReducers: ({
        [getCart.pending]: (state, action) => {
            state.cartLoading = true;
        },
        [getCart.fulfilled]: (state, action) => {
            state.cartLoading = false;
            state.cartError = [];
            state.cart = action.payload.data
            state.cartResMsg = action.payload.message
        },
        [getCart.rejected]: (state, action) => {
            state.cartLoading = false;
            state.cartResMsg = "";
            state.cartError = action.payload.message;
        },

        [addItem.pending]: (state, action) => {
            state.cartLoading = true;
            state.cartResMsg = '';
        },
        [addItem.fulfilled]: (state, action) => {
            state.cartLoading = false;
            state.cartError = [];
            state.cartResMsg = action.payload.message
        },
        [addItem.rejected]: (state, action) => {
            state.cartLoading = false;
            state.cartResMsg = "";
            state.cartError = action.payload.message;
        },

        [increase.pending]: (state, action) => {
            state.cartLoading = true;
        },
        [increase.fulfilled]: (state, action) => {
            state.cartLoading = false;
            state.cart = action.payload.data
            state.cartResMsg = action.payload.message
        },
        [increase.rejected]: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload.message;
        },

        [dicrease.pending]: (state, action) => {
            state.cartLoading = true;
        },
        [dicrease.fulfilled]: (state, action) => {
            state.cartLoading = false;
            state.cart = action.payload.data
            state.cartResMsg = action.payload.message
        },
        [dicrease.rejected]: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload.message;
        },

        [remove.pending]: (state, action) => {
            state.cartLoading = true;
        },
        [remove.fulfilled]: (state, action) => {
            state.cartLoading = false;
            state.cartResMsg = action.payload.message
        },
        [remove.rejected]: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload.message;
        },

        [removeProduct.pending]: (state, action) => {
            state.cartLoading = true;
        },
        [removeProduct.fulfilled]: (state, action) => {
            state.cartLoading = false;
            state.cart = action.payload.data
            state.cartResMsg = action.payload.message
        },
        [removeProduct.rejected]: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload.message;
        },
    })
})

export default cartSlice.reducer;