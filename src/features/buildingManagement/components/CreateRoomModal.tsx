import {
  Button,
  Flex,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useBuildingManagementModalState } from "../contexts/ModalContextProvider";

export default function CreateRoomModal() {
  const {
    isOpenCreateRoomModal,
    closeCreateRoomModal,
  } = useBuildingManagementModalState();

  return (
    <Modal isOpen={isOpenCreateRoomModal} onClose={closeCreateRoomModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar nuevo cuarto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Capacidad total del cuarto</FormLabel>
          <Flex gap={2}>
            <Input type="number"></Input>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            backgroundColor={"error"}
            mr={3}
            onClick={closeCreateRoomModal}
          >
            Close
          </Button>
          <Button variant="ghost"></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
