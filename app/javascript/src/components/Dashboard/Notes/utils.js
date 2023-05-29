import dayjs from "dayjs";

export const getElapsedTime = date => dayjs(date).fromNow();

export const formatDateString = date => dayjs(date).format("dddd, hh:mm A");
