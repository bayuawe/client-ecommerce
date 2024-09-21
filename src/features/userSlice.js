import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialSlice,
  reducers: {
    loginUser: (state, action) => {
      const { user } = action.payload.data;

      //set value
      state.user = user;

      //set localStorage
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
