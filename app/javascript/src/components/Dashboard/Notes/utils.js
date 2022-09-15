import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const calculateCreatedAgo = date => {
  dayjs.extend(relativeTime);
  const createdAgo = dayjs(date).fromNow();
  return createdAgo;
};

export const formatDatetoWeekdayTime = date => {
  const weekdayTime = dayjs(date).format("dddd, hh:mmA");
  return weekdayTime;
};
