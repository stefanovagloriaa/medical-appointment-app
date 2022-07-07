import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    changeAuthState(state){
      state.isAuth = true;
    }
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authActions = authSlice.actions;

export default store;
