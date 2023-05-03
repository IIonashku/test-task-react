// Absolute imports
import React, { type Dispatch, type SetStateAction, useContext, useState } from 'react';

// Components
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Portal from '../../containers/Portal';
import Select from '../Select';

// Context
import { Context } from '../../containers/ContextProvider';

// Helpers
import { getDataByMonth, dateFormatter } from '../../helpers/common';

// Data
import timeSheets from '../../timesheets.json';

interface IContext {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface IModalProps {
  selectedEmployee: Employee | null;
}

const ModalTimeSheets: React.FC<IModalProps> = ({ selectedEmployee }) => {
  const { setOpen, isOpen } = useContext<IContext>(Context);
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
