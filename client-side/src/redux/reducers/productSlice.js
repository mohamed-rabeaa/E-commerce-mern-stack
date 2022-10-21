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
        data: [],
        products: [],
        product: {},
        recentItems: [],
        bestSellerItems: [],
        resMsg: "",
        error: [],
        loading: false
    },
    reducers: ({}),
    extraReducers: ({
        [getProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.product = action.payload.data
            state.resMsg = action.payload.message
        },
        [getProduct.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [searchProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [searchProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.recentItems = action.payload.recentProductData || state.recentItems
            state.bestSellerItems = action.payload.bestSellerData || state.bestSellerItems
            //state.resMsg = action.payload.message
        },
        [searchProduct.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [allProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [allProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.products = action.payload.data
            state.resMsg = action.payload.message
        },
        [allProduct.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [create.pending]: (state, action) => {
            state.loading = true;
            state.resMsg = '';
        },
        [create.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.data = action.payload.data
            state.resMsg = action.payload.message
        },
        [create.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [update.pending]: (state, action) => {
            state.loading = true;
        },
        [update.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data
            state.resMsg = action.payload.message
        },
        [update.rejected]: (state, action) => {
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
    })
})

export default productSlice.reducer;