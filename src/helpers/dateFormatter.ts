const dateFormatter = (date: string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = `0 + ${newDate.getMonth() + 1}`.slice(-2);
  const day = `0 + ${newDate.getDate()}`.slice(-2);
  const hours = `0 + ${newDate.getHours()}`.slice(-2);
  const minutes = newDate.getMinutes() === 0 ? '00' : `0 + ${newDate.getMinutes()}`.slice(-2);

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export default dateFormatter;
