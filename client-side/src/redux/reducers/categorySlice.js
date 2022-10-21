import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}` || "";

const header = { headers: { Authorization } };

const SERVER_URL = process.env.REACT_APP_BASE_URL

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const configData = {
            params: { id: id },
            headers: { Authorization }
        }
        try {
            const res = await axios.get(
                `${SERVER_URL}/category/oneCategory/${id}`,
                configData
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const parentCategory = createAsyncThunk(
    "category/parentCategory",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.get(
                `${SERVER_URL}/admin/category/cateByorder/`,

                header
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const allCategory = createAsyncThunk(
    "category/allCategory",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.get(`${SERVER_URL}/category/allCategories/`);
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
export const create = createAsyncThunk(
    "category/create",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/admin/category/create`,
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
    "category/update",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.put(
                `${SERVER_URL}/admin/category/`,
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
    "category/remove",
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.delete(
                `${SERVER_URL}/admin/category/`,
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



const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: [],
        allCategories: [],
        oneCategory: {},
        resMsg: "",
        error: [],
        loading: false
    },
    reducers: ({}),
    extraReducers: ({
        [getCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.oneCategory = action.payload.data
            state.resMsg = action.payload.message
        },
        [getCategory.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [allCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [allCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.allCategories = action.payload.data
            state.resMsg = action.payload.message
        },
        [allCategory.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [parentCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [parentCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.allCategories = action.payload
            state.resMsg = action.payload.message
        },
        [parentCategory.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [create.pending]: (state, action) => {
            state.loading = true;
            state.resMsg = ''
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

export default categorySlice.reducer;