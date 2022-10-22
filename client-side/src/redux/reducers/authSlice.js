import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";
const SERVER_URL = config.apiUrl
export const register = createAsyncThunk(
    "auth/register",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
               ` ${SERVER_URL}/auth/signup`,
                values
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const verify = createAsyncThunk(
    "auth/verify",
    async ({ url }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.get(url);
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const sendVerifyToken = createAsyncThunk(
    "auth/sendVerifyToken",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/auth/activateAccount`,
                values
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async ({ values, navigate }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/auth/login`,
                values
            );
            navigate("/")
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const forgetPassword = createAsyncThunk(
    "auth/forgetPassword",
    async ({ values }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/auth/resetPassword`,
                values
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async ({ url, values, navigate }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(url, values);
            navigate("/")
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)



const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        resMsg: "",
        error: [],
        loading: false
    },
    reducers: ({}),
    extraReducers: ({
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.resMsg = action.payload.message
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [verify.pending]: (state, action) => {
            state.loading = true;
        },
        [verify.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            localStorage.setItem("token", JSON.stringify({ ...action.payload.token }));
            state.resMsg = action.payload.message
        },
        [verify.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [sendVerifyToken.pending]: (state, action) => {
            state.loading = true;
        },
        [sendVerifyToken.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            state.resMsg = action.payload.message
        },
        [sendVerifyToken.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },

        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            state.resMsg = action.payload.message
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [forgetPassword.pending]: (state, action) => {
            state.loading = true;
        },
        [forgetPassword.fulfilled]: (state, action) => {
            state.loading = false;
            state.resMsg = action.payload.message
        },
        [forgetPassword.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [resetPassword.pending]: (state, action) => {
            state.loading = true;
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            localStorage.setItem("token", JSON.stringify({ ...action.payload.token }));
            state.resMsg = action.payload.message
        },
        [resetPassword.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

    })
})

export default authSlice.reducer;