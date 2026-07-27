import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  dateOfBirth: string | null;
  role: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  initialized: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  initialized: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
      }>,
    ) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      state.loading = false;
    },

    restoreSession(
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
      }>,
    ) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.initialized = true;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.initialized = true;
    },

    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const {
  loginSuccess,
  restoreSession,
  logout,
  setLoading,
  setUser,
  setInitialized,
} = authSlice.actions;

export default authSlice.reducer;
