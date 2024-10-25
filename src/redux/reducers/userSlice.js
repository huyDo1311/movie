import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../service/config';
import { message } from 'antd';


// let userData = localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER")) : null;

export let loginActionService = createAsyncThunk('userSlice/loginActionService',
  async (dataForm) => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/DangNhap", dataForm);
      //  window.location.href = "/"
      return result.data.content;
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }  
  }
);

const initialState = {
  dataLogin: localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER")) : null,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserAction: (state, action) => {
        state.dataLogin = action.payload;
    },
  },
  // extraReducers: {
  //   [loginActionService.fulfilled]: (state,action) => {
  //     state.dataLogin = action.payload;
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(loginActionService.fulfilled, (state,action) => {
      state.dataLogin = action.payload;
    });
    builder.addCase(loginActionService.rejected, (state,action) => {
      message.error("Đăng nhập thất bại");
    });
    
  }
});

export const {setUserAction} = userSlice.actions

export default userSlice.reducer;


/* ----------------------------------- create async thunk ----------------------------------- */

