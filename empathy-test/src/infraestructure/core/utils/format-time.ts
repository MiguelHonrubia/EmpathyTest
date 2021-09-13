export const formatTime = (ms) => {
  const hours = `0${new Date(ms).getHours() - 1}`.slice(-2);
  const minutes = `0${new Date(ms).getMinutes()}`.slice(-2);
  const seconds = `0${new Date(ms).getSeconds()}`.slice(-2);

  const time = `${hours}:${minutes}:${seconds}`;

  return time;
};
