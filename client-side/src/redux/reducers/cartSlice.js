import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}` || "";

const header = { headers: { Authorization } };

const SERVER_URL = process.env.REACT_APP_BASE_URL

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
        data: [],
        carts: [],
        cart: {},
        resMsg: "",
        error: [],
        loading: false
    },
    reducers: ({}),
    extraReducers: ({
        [getCart.pending]: (state, action) => {
            state.loading = true;
        },
        [getCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.cart = action.payload.data
            state.resMsg = action.payload.message
        },
        [getCart.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [addItem.pending]: (state, action) => {
            state.loading = true;
            state.resMsg = '';
        },
        [addItem.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.resMsg = action.payload.message
        },
        [addItem.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [increase.pending]: (state, action) => {
            state.loading = true;
        },
        [increase.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload.data
            state.resMsg = action.payload.message
        },
        [increase.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [dicrease.pending]: (state, action) => {
            state.loading = true;
        },
        [dicrease.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload.data
            state.resMsg = action.payload.message
        },
        [dicrease.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [remove.pending]: (state, action) => {
            state.loading = true;
        },
        [remove.fulfilled]: (state, action) => {
            state.loading = false;
            state.resMsg = action.payload.message
        },
        [remove.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [removeProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [removeProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload.data
            state.resMsg = action.payload.message
        },
        [removeProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    })
})

export default cartSlice.reducer;