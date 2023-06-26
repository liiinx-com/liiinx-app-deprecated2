import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const toDayjs = (timestamp: string) => dayjs(timestamp);

export const fromNow = (dayjsDt: Dayjs) => {
  return dayjsDt.fromNow();
};
