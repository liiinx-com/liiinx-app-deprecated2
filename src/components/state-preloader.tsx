"use client";
import { WebpageData } from "@/services/types";
import { store } from "@/store";
import { setWebpage } from "@/store/webpage.slice";
import { FC, useRef } from "react";

interface StatePreloaderProps {
  webpage: WebpageData;
}

export const StatePreloader: FC<StatePreloaderProps> = ({ webpage }) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setWebpage(webpage));
    loaded.current = true;
  }
  return null;
};
