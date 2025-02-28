import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

interface User {
  id: string;
  name: string;
}

interface FilterState {
  service: string;
  type: string;
  center: string;
  searchQuery: string;
  selectedProviders: string[]; // Fix: Added this field
  users: User[]; // Fix: Users should have an id and name
}

const initialState: FilterState = {
  service: "All Service",
  type: "All types",
  center: "All Centres",
  searchQuery: "",
  selectedProviders: [], // Fix: Defined properly
  users: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (
      state,
      action: PayloadAction<Omit<FilterState, "selectedProviders" | "users">>
    ) => {
      state.service = action.payload.service;
      state.type = action.payload.type;
      state.center = action.payload.center;
      state.searchQuery = action.payload.searchQuery;
    },
    resetFilters: (state) => {
      state.searchQuery = "";
      state.selectedProviders = [];
      state.service = "All Service";
      state.type = "All types";
      state.center = "All Centres";
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedProviders: (state, action: PayloadAction<string[]>) => {
      state.selectedProviders = action.payload;
    },
    removeSelectedProvider: (state, action: PayloadAction<string>) => {
      state.selectedProviders = state.selectedProviders.filter(
        (provider) => provider !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.fetchUsers.matchFulfilled,
      (state, action: PayloadAction<{ users: User[] }>) => {
        state.users = action.payload.users;
      }
    );
  },
});

export const {
  setFilters,
  resetFilters,
  setSearchQuery,
  setSelectedProviders,
  removeSelectedProvider,
} = filterSlice.actions;

export default filterSlice.reducer;
