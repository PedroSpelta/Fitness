export const getTodayDateString = () => {
  const date = new Date();
  const dateString = `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    date.getMonth() +
    1
  ).slice(-2)}/${date.getFullYear()}`;
  return dateString;
};
