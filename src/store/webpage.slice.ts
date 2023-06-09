import { LayoutData, PageData, ThemeDto, WebpageData } from "@/services/types";
import { ProfileDto } from "@/services/types/backend-types/profile";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface WebpageState {
  config: WebpageData;
}

const initialState: WebpageState = {
  config: {
    layout: {} as LayoutData,
    page: {} as PageData,
    profile: {} as ProfileDto,
    theme: {} as ThemeDto,
  },
};

const webpageSlice = createSlice({
  name: "webpage",
  initialState,
  reducers: {
    setWebpage: (state, action: PayloadAction<WebpageData>) => {
      state.config = action.payload;
    },
  },
});

export const { setWebpage } = webpageSlice.actions;
export default webpageSlice.reducer;
