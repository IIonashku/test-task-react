// Absolute imports
import React, { createContext, type ReactNode, useState, type SetStateAction, type Dispatch } from 'react';

interface ModalType {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface IModalProps {
  children: ReactNode;
}

export const Context = createContext<ModalType>({
  isOpen: false,
  setOpen: () => {},
});

const ModalContextProvider: React.FC<IModalProps> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return <Context.Provider value={{ isOpen, setOpen }}>{children}</Context.Provider>;
};

export default ModalContextProvider;
