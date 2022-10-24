import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import config from "../../config";

const Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}` || "";

const header = { headers: { Authorization } };

//const SERVER_URL = config.apiUrl
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
        userResMsg: "",
        userError: [],
        userLoading: false
    },
    reducers: ({}),
    extraReducers: ({

        [changePhoto.pending]: (state, action) => {
            state.userLoading = true;
        },
        [changePhoto.fulfilled]: (state, action) => {
            state.userLoading = false;
            state.userError = [];
            localStorage.setItem("profile", JSON.stringify({ ...action.payload.data }));
            state.userResMsg = action.payload.message
        },
        [changePhoto.rejected]: (state, action) => {
            state.userLoading = false;
            state.userResMsg = "";
            state.userError = action.payload.message;
        },
    })
})

export default userSlice.reducer;