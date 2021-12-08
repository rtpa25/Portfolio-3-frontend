/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreationState {
  createType: string;
  isCreating: boolean;
  isEditing: boolean;
}

const initialState: CreationState = {
  createType: '',
  isCreating: false,
  isEditing: false,
};

const CreationSlice = createSlice({
  name: 'creation',
  initialState: initialState,
  reducers: {
    setCreateType: (state, action: PayloadAction<{ type: string }>) => {
      state.createType = action.payload.type;
    },
    setIsEditing: (state, action: PayloadAction<{ editing: boolean }>) => {
      state.isEditing = action.payload.editing;
    },
    setIsCreating: (state, action: PayloadAction<{ creating: boolean }>) => {
      state.isCreating = action.payload.creating;
    },
  },
});

export const { setCreateType, setIsEditing, setIsCreating } =
  CreationSlice.actions;
export default CreationSlice.reducer;
