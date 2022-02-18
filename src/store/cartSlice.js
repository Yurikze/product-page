import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.total += action.payload
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice