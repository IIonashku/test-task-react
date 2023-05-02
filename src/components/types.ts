export interface ITimeSheet {
  id: string;
  userId: string;
  companyId: string;
  startTime: string;
  endTime: string;
  minutes: number;
  breakMinutes: number;
  locationChecked: boolean;
  status: string;
  note: string | null;
  assessment: number;
  approvalPersonId: string | null;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  phone: string;
  roleId: number;
  managerId: string | null;
  address: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  subDepartment: any;
  manager: any;
  avatar: {
    link: string;
  };
  department: any;
  group: string | null;
  division: any;
}
