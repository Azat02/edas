import { ReactNode } from "react";
import { Wrapper, ModalWrapper} from "./style";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

function Modal({ children, setOpen, isOpen }: ModalProps): JSX.Element {

  const handleClick = () => {
    setOpen(false)
  }
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  return (
    <ModalWrapper onClick={handleClick}>
      <Wrapper onClick={handleModalClick}>
        {children}
      </Wrapper>
    </ModalWrapper>
  );
}

export default Modal;
