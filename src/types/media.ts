import { Dayjs } from "dayjs";
import { MediaItemResponse as BackendMediaItemResponse } from "./backend-types";

export interface MediaItemResponse extends BackendMediaItemResponse {
  publishedAtDayjs: Dayjs;
}
