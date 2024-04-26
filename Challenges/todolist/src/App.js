import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';


const initialState = {
  items: [
    { id: uuid(), name: 'milk' },
    { id: uuid(), name: 'coffee' },
    { id: uuid(), name: 'mochi' }
  ]
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: uuid(), name: action.payload });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    }
  }
});

console.log(todoSlice);

export const todoReducer = todoSlice.reducer;

export const {addItem, removeItem} = todoSlice.actions;

export const selectAllItems = (state) => 
