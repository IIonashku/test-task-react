// Absolute imports
import React, { createContext, type ReactNode, useState } from 'react';

interface ModalType {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

interface IModalProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalType>({
  isOpen: false,
  setOpen: () => {},
});

const ModalContextProvider: React.FC<IModalProps> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return <ModalContext.Provider value={{ isOpen, setOpen }}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
