import { configureStore, createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
  products: [], // Danh sách hàng hóa
};

// Slice để quản lý các hành động
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); // Lưu cả tên và giá của sản phẩm
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload; // Cập nhật sản phẩm
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;

// Tạo store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;