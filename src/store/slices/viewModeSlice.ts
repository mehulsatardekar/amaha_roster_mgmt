import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListType {
  viewMode: string;
}

const initialState: ListType = {
  viewMode: "NORMAL",
};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<string>) => {
      state.viewMode = action.payload;
    },
  },
});

export const { setViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;
