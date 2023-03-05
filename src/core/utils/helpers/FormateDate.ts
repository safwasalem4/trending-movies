import dayjs from "dayjs";

export const FormattedDate = (date: Date, format: string = "DD/MM/YYYY") => {
  if (date) return dayjs(date).format(format);
  return date;
};
