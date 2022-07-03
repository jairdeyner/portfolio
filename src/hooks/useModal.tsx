import { useState } from "react";

export const useModal: (value: boolean) => [boolean, () => void, () => void] = (
  initialValue = false
) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal: () => void = () => setIsOpen(true);

  const closeModal: () => void = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
