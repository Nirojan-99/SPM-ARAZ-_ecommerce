function FormatDate(date) {
  const val = new Date(date);
  const FDate = `${val.getDay()}/${val.getMonth() + 1}/${val.getFullYear()}`;
  return FDate;
}

export default FormatDate;
