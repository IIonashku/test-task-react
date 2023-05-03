// Absolute imports
import { type ReactNode, type ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
}

const Portal = ({ children }: IPortal): ReactPortal => createPortal(children, document.body);

export default Portal;
