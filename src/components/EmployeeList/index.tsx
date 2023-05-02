// Absolute imports
import React, { useContext, useState } from 'react';

// Components
import Table from 'react-bootstrap/Table';
import ModalTimeSheets from '../Modal/ModalTimeSheets';

// Context
import { ModalContext } from '../Modal/ModalContextProvider';

// Data
import users from '../../users.json';

// Types
import { type Employee } from '../types';

const EmployeeList: React.FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const { isOpen, setOpen } = useContext(ModalContext);

  const handleItemClick = (user: Employee) => {
    setSelectedEmployee(user);
    setOpen(true);
  };

  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Phone</th>
        </tr>
      </thead>
      {users.map((user, index) => (
        <tbody
          key={user.id}
          onClick={() => {
            handleItemClick(user);
          }}
        >
          <tr>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.position}</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      ))}
      {isOpen ? <ModalTimeSheets selectedEmployee={selectedEmployee} /> : null}
    </Table>
  );
};

export default EmployeeList;
