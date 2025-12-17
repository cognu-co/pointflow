import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface OptionsModalData {
  isVisible: boolean;
  handleView: () => void;
  onClose: () => void;
  onOpen: () => void;
}

const OptionsModalContext = createContext({} as OptionsModalData);

interface OptionsModalProviderProps {
  children: ReactNode;
}

export function OptionsModalProvider({ children }: OptionsModalProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleView = useCallback(() => {
    setIsVisible(!isVisible);
  }, [setIsVisible]);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const onOpen = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  return (
    <OptionsModalContext.Provider
      value={{ isVisible, handleView, onClose, onOpen }}
    >
      {children}
    </OptionsModalContext.Provider>
  );
}

export const useOptionsModal = () => useContext(OptionsModalContext);
