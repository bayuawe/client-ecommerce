import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");

      toast.success("Logout Berhasil");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
