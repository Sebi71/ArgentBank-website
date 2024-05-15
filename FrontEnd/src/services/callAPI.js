import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const auth = createAsyncThunk("user/auth", async ({email, password}) => {
    try {
        const res = await axios.post(`http://localhost:3001/api/v1/user/login`, {email, password})
        console.log(res);
        return res.data.body
    } catch (err) {
        alert(err);
    }
})

// const token = sessionStorage.getItem("token")
export const profile = createAsyncThunk("user/profile", async (token) => {
    try {
        const res = await axios.post(`http://localhost:3001/api/v1/user/profile`, null, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        });
        console.log(res);
        return res.data.body;
    } catch (err) {
        alert(err);
        console.log(err);
    }
});
