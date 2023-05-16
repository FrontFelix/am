import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function AgeVerification() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isAge");
    if (stored === null) {
      localStorage.setItem("isAge", JSON.stringify(false));
    }
    if (stored) {
      const isAge = JSON.parse(stored);
      if (isAge) {
        setIsOpen(false);
      }
    }
  });

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>test</h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">I am 20 or over</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
