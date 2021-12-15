const twoDigits = (param) => {
  const time = param.toString();
  return time.length === 1 ? `0${time}` : time;
};

export default twoDigits;
