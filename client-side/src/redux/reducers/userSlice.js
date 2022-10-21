import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}` || "";

const header = { headers: { Authorization } };

const SERVER_URL = process.env.REACT_APP_BASE_URL

export const changePhoto = createAsyncThunk(
    "product/changePhoto",
    async ({ data }, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const res = await axios.post(
                `${SERVER_URL}/user/changePhoto/`,
                data,
                header
            );
            return res.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        resMsg: "",
        error: [],
        loading: false
    },
    reducers: ({}),
    extraReducers: ({

        [changePhoto.pending]: (state, action) => {
            state.loading = true;
        },
        [changePhoto.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = [];
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            state.resMsg = action.payload.message
        },
        [changePhoto.rejected]: (state, action) => {
            state.loading = false;
            state.resMsg = "";
            state.error = action.payload.message;
        },
    })
})

export default userSlice.reducer;