import { ThemeConfig } from "@/services/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  code: string;
  config: ThemeConfig;
}

const initialState: ThemeState = {
  code: "heemTheme",
  config: {
    headerHeight: "250px",
    mainBorderColor: "black",
    bgColor: "#81c784",
    primaryTextColor: "red",
    secondaryTextColor: "green",
    profileImageBorderColor: "red",
    profileImageBorderWidth: "2px",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeConfig: (state, action: PayloadAction<ThemeConfig>) => {
      state.config = action.payload;
    },
  },
});

export const { setThemeConfig } = themeSlice.actions;
export default themeSlice.reducer;
