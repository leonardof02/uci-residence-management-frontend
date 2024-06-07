import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useBuildingManagementModalState } from "../contexts/ModalContextProvider";

type CreateBuildingData = {
  number: number;
  faculty: string;
  yearOfStudents: number;
  block: number;
  availability: boolean;
};

const validationSchema = yup.object({
  number: yup.number().required("El número del edificio es requerido"),
  faculty: yup.string().required("La facultad es requerida"),
  yearOfStudents: yup
    .number()
    .required("El año de los estudiantes es requerido"),
  block: yup.number().required("El bloque es requerido"),
  availability: yup.boolean().required(),
});

export default function CreateBuildingModal() {

  const { isOpenCreateBuildingModal: isModalOpen, closeCreateBuildingModal } = useBuildingManagementModalState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBuildingData>({
    resolver: yupResolver(validationSchema),
  });

  function submitNewBuilding(newBuilding: CreateBuildingData) {
    console.log(newBuilding);
    closeCreateBuildingModal();
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeCreateBuildingModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar nuevo edificio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={errors.number && true}>
            <FormLabel>Numero</FormLabel>
            <Input {...register("number")} type="number" />
            <FormHelperText>{errors.number?.message}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={errors.faculty && true}>
            <FormLabel>Facultad</FormLabel>
            <Select
              {...register("faculty")}
              placeholder="Selecciona una facultad"
            >
              <option value="option1">Facultad 1</option>
              <option value="option2">Facultad 2</option>
              <option value="option3">Facultad 3</option>
              <option value="option3">Facultad 4</option>
              <option value="option3">FTE</option>
              <option value="option3">CITEC</option>
            </Select>
            <FormHelperText>{errors.faculty?.message}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={errors.block && true}>
            <FormLabel>Numero de manzana</FormLabel>
            <Input {...register("block")} type="number" />
            <FormHelperText>{errors.block?.message}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={errors.yearOfStudents && true}>
            <FormLabel>Anno de los estudiantes del edificio</FormLabel>
            <Input {...register("yearOfStudents")} type="number" />
            <FormHelperText>{errors.yearOfStudents?.message}</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Esta disponible?</FormLabel>
            <Checkbox {...register("availability")} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            backgroundColor={"error"}
            mr={3}
            onClick={() => {}}
          >
            Close
          </Button>
          <Button
            variant="ghost"
            onClick={handleSubmit(submitNewBuilding)}
          ></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
