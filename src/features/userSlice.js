import { createSlice } from "@reduxjs/toolkit";

const initialSlice = createSlice({
  name: "admin",
  email: "admin@gmail.com",
});

const userSlice = createSlice({
  name: "user",
  initialState: initialSlice,
  reducers: {
    loginUser: (state, action) => {},
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
