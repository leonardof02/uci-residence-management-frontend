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

export default function CreateApartmentModal() {
  const {
    isOpenCreateApartmentModal,
    numberOfSelectedBuilding: numberOfBuilding,
    closeCreateApartmentModal,
  } = useBuildingManagementModalState();

  return (
    <Modal isOpen={isOpenCreateApartmentModal} onClose={closeCreateApartmentModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar nuevo apartamento</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Numero del apartamento</FormLabel>
          <Flex gap={2}>
            <Input type="number"></Input>
            <Input
              readOnly
              disabled
              value={`Edificio ${numberOfBuilding}`}
              width={"fit-content"}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            backgroundColor={"error"}
            mr={3}
            onClick={closeCreateApartmentModal}
          >
            Close
          </Button>
          <Button variant="ghost"></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
