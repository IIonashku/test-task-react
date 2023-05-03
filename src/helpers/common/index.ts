export const dateFormatter = (date: string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = `0 + ${newDate.getMonth() + 1}`.slice(-2);
  const day = `0 + ${newDate.getDate()}`.slice(-2);
  const hours = `0 + ${newDate.getHours()}`.slice(-2);
  const minutes = newDate.getMinutes() === 0 ? '00' : `0 + ${newDate.getMinutes()}`.slice(-2);

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const getDataByMonth = (
  timeSheets: ITimeSheet[],
  selectedEmployee: Employee | null,
  selectedMonth: string,
) => {
  const dataTimeSheets = timeSheets.filter(
    (timeInfo: ITimeSheet) => timeInfo.userId === selectedEmployee?.id,
  );
  const dataByMonths =
      selectedMonth === 'all'
        ? dataTimeSheets
        : dataTimeSheets.filter(
          (item: ITimeSheet) =>
              `${new Date(item.startTime).getMonth()}`.slice(-2) === selectedMonth,
        );
  return dataByMonths;
};
