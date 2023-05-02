// Absolute imports
import React from 'react';

// Components
import Form from 'react-bootstrap/Form';

// Configuration
import options from '../../config/optionsForMonths';

interface ISelect {
  handleMonthChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelect> = ({ handleMonthChange }) =>
  (
    <Form.Select size="sm" onChange={handleMonthChange}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.title}
        </option>
      ))}
    </Form.Select>
  );

export default Select;
