import { createSlice } from '@reduxjs/toolkit';

export type userSketch = {
  username: string;
  token: string;
};

const user: userSketch = {
  username: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: user,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = user;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
