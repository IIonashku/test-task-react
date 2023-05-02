// Types
import { type Employee, type ITimeSheet } from '../components/types';

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
