import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}` || "";
const header = { headers: { Authorization } };
const SERVER_URL = process.env.REACT_APP_BASE_URL

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const configData = {
            headers: { Authorization }
        }
        try {
            const res = await axios.get(
                `${SERVER_URL}/product/oneProduct/${id}`,
                configData
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const allProduct = createAsyncThunk(
    "product/allProduct",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.get(`${SERVER_URL}/product/allProduct`);
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const create = createAsyncThunk(
    "product/create",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/admin/product/create`,
                values,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
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
export const update = createAsyncThunk(
    "product/update",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.put(
                `${SERVER_URL}/admin/product/`,
                values,
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
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.delete(
                `${SERVER_URL}/admin/product/`,
                {
                    data: {
                        id
                    }, headers: {
                        Authorization
                    }
                }
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const searchProduct = createAsyncThunk(
    "product/searchProduct",
    async ({ searchKey }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.get(
                `${SERVER_URL}/product/searchProduct?searchBy=${searchKey}`
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)



const productSlice = createSlice({
    name: "product",
    initialState: {
        productData: [],
        products: [],
        product: {},
        recentItems: [],
        bestSellerItems: [],
        productResMsg: "",
        productError: [],
        productLoading: false
    },
    reducers: ({}),
    extraReducers: ({
        [getProduct.pending]: (state, action) => {
            state.productLoading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.productError = [];
            state.product = action.payload.data
            state.productResMsg = action.payload.message
        },
        [getProduct.rejected]: (state, action) => {
            state.productLoading = false;
            state.productResMsg = "";
            state.productError = action.payload.message;
        },

        [searchProduct.pending]: (state, action) => {
            state.productLoading = true;
        },
        [searchProduct.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.productError = [];
            state.recentItems = action.payload.recentProductData || state.recentItems
            state.bestSellerItems = action.payload.bestSellerData || state.bestSellerItems
            //state.productResMsg = action.payload.message
        },
        [searchProduct.rejected]: (state, action) => {
            state.productLoading = false;
            state.productResMsg = "";
            state.productError = action.payload.message;
        },

        [allProduct.pending]: (state, action) => {
            state.productLoading = true;
        },
        [allProduct.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.productError = [];
            state.products = action.payload.data
            state.productResMsg = action.payload.message
        },
        [allProduct.rejected]: (state, action) => {
            state.productLoading = false;
            state.productResMsg = "";
            state.productError = action.payload.message;
        },

        [create.pending]: (state, action) => {
            state.productLoading = true;
            state.productResMsg = '';
        },
        [create.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.productError = [];
            state.productData = action.payload.data
            state.productResMsg = action.payload.message
        },
        [create.rejected]: (state, action) => {
            state.productLoading = false;
            state.productResMsg = "";
            state.productError = action.payload.message;
        },

        [update.pending]: (state, action) => {
            state.productLoading = true;
        },
        [update.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.productData = action.payload.data
            state.productResMsg = action.payload.message
        },
        [update.rejected]: (state, action) => {
            state.productLoading = false;
            state.productError = action.payload.message;
        },

        [remove.pending]: (state, action) => {
            state.productLoading = true;
        },
        [remove.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.productResMsg = action.payload.message
        },
        [remove.rejected]: (state, action) => {
            state.productLoading = false;
            state.productError = action.payload.message;
        },
    })
})

export default productSlice.reducer;