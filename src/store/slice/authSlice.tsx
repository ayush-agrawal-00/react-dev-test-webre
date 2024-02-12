import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../API/Interceptor";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../components/Common/Form";
export const register = createAsyncThunk(
  "auth/register",
  async (value: IUser) => {
    const response = await axiosInstance.post("register", value);
    return response.data.token;
  }
);
interface AuthState {
  data: {};
  token: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: AuthState = {
  data: {},
  token: "",
  status: "idle",
  error: null,
};
export const Login = createAsyncThunk("auth/login", async (value: IUser) => {
  const response = await axiosInstance.post("login", value);
  return response.data;
});
const authSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateToken(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })
      .addCase(Login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(Login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});
export const { updateToken } = authSlice.actions;
export default authSlice.reducer;
