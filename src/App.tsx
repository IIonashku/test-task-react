// Absolute imports
import React from 'react';

// Components
import EmployeeList from './components/EmployeeList';
import ModalContextProvider from './containers/ContextProvider';

const App: React.FC = () => (
  <div className="App">
    <ModalContextProvider>
      <EmployeeList />
    </ModalContextProvider>
  </div>
);

export default App;
