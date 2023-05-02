// Absolute imports
import React, { useContext, useState } from 'react';

// Components
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Portal from './Portal';
import Select from '../Select';

// Context
import { ModalContext } from './ModalContextProvider';

// Helpers
import dateFormatter from '../../helpers/dateFormatter';
import { getDataByMonth } from '../../helpers/getDataByMonth';

// Data
import timeSheets from '../../timesheets.json';

// Types
import { type Employee, type ITimeSheet } from '../types';

interface IModalContext {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

interface IModalProps {
  selectedEmployee: Employee | null;
}

const ModalTimeSheets: React.FC<IModalProps> = ({ selectedEmployee }) => {
  const { setOpen, isOpen } = useContext<IModalContext>(ModalContext);
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const dataByMonth = getDataByMonth(timeSheets, selectedEmployee, selectedMonth);

  return (
    <Portal>
      <Modal
        show={isOpen}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={ { gap: '20px' } }>
          <Modal.Title>Timesheets</Modal.Title>
          <Select handleMonthChange={handleMonthChange} />
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            {dataByMonth.length > 0
              ? (
                  dataByMonth.map((timeInfo: ITimeSheet, index: number) => (
                <tbody key={timeInfo.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{dateFormatter(timeInfo.startTime)}</td>
                    <td>{dateFormatter(timeInfo.endTime)}</td>
                  </tr>
                </tbody>
                  ))
                )
              : (
              <>There are not timesheets in this month</>
                )}
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Portal>
  );
};

export default ModalTimeSheets;
