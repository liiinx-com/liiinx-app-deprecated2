import { ApiResponse, WebpageData } from "@/types";
import { API_URL, request } from "./request";

export const getWebpage = async (
  handle: string,
  pageName: string,
  locale: string
): Promise<ApiResponse<WebpageData>> => {
  return request({
    method: "GET",
    url: `${API_URL}/websites/${handle}/pages/${pageName}`,
  });
};
