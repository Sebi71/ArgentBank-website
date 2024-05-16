import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const auth = createAsyncThunk("user/auth", async ({ email, password }) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/v1/user/login`, {
        email,
        password,
      });
      const token = res.data.body.token;
      sessionStorage.setItem("token", token);
      // console.log("res : ",token);
      return token;
    } catch (err) {
      // console.log("ERROR", err)
      // alert("ERROR",err);
    }
  }
);


export const profile = createAsyncThunk("user/profile", async () => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.post(
      `http://localhost:3001/api/v1/user/profile`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const userData = res.data.body;
    // console.log("res : ", userData);
    return userData;
  } catch (err) {
    // alert("ERROR", err);
    // console.log("ERROR", err);
  }
});


export const editProfile = createAsyncThunk("user/editProfile", async ({newUserName}) => {
  try {
    const token = sessionStorage.getItem("token");
    console.log("put", token);
    const res = await axios.put(
      `http://localhost:3001/api/v1/user/profile`,
      {userName: newUserName},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const userData = res.data.body;
    console.log("res : ", userData);
    return userData;
  } catch (err) {
    // alert("ERROR", err);
    console.log("ERROR", err);
  }
});
