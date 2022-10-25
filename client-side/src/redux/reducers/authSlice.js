import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_BASE_URL
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
        user: {},
        authResMsg: "",
        authError: [],
        authLoading: false
    },
    reducers: ({}),
    extraReducers: ({
        [register.pending]: (state, action) => {
            state.authLoading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.authLoading = false;
            state.authError = [];
            state.authResMsg = action.payload.message
        },
        [register.rejected]: (state, action) => {
            state.authLoading = false;
            state.authResMsg = "";
            state.authError = action.payload.message;
        },

        [verify.pending]: (state, action) => {
            state.authLoading = true;
        },
        [verify.fulfilled]: (state, action) => {
            state.authLoading = false;
            state.authError = [];
            state.user = action.payload.data
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            localStorage.setItem("token", JSON.stringify({ ...action.payload.token }));
            state.authResMsg = action.payload.message
        },
        [verify.rejected]: (state, action) => {
            state.authLoading = false;
            state.authResMsg = "";
            state.authError = action.payload.message;
        },

        [sendVerifyToken.pending]: (state, action) => {
            state.authLoading = true;
        },
        [sendVerifyToken.fulfilled]: (state, action) => {
            state.authLoading = false;
            state.authError = [];
            state.authResMsg = action.payload.message
        },
        [sendVerifyToken.rejected]: (state, action) => {
            state.authLoading = false;
            state.authResMsg = "";
            state.authError = action.payload.message;
        },

        [login.pending]: (state, action) => {
            state.authLoading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.authLoading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            state.authResMsg = action.payload.message
        },
        [login.rejected]: (state, action) => {
            state.authLoading = false;
            state.authError = action.payload.message;
        },
        [forgetPassword.pending]: (state, action) => {
            state.authLoading = true;
        },
        [forgetPassword.fulfilled]: (state, action) => {
            state.authLoading = false;
            state.authResMsg = action.payload.message
        },
        [forgetPassword.rejected]: (state, action) => {
            state.authLoading = false;
            state.authError = action.payload.message;
        },

        [resetPassword.pending]: (state, action) => {
            state.authLoading = true;
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.authLoading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            localStorage.setItem("token", JSON.stringify({ ...action.payload.token }));
            state.authResMsg = action.payload.message
        },
        [resetPassword.rejected]: (state, action) => {
            state.authLoading = false;
            state.authError = action.payload.message;
        },

    })
})

export default authSlice.reducer;