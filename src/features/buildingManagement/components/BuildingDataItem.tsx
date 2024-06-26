import {
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import ApartmentData from "../types/ApartmentData";
import ApartmentDataItem from "./ApartmentDataItem";
import { useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useBuildingManagementModalState } from "../contexts/ModalContextProvider";

type Props = {
  number: number;
  apartments: ApartmentData[];
  faculty: string;
  yearOfStudents: number;
  block: number;
  availability: true;
  instructorInCharge: number;
};

export default function BuildingDataItem({
  number,
  apartments,
  faculty,
  yearOfStudents,
  block,
  availability,
  instructorInCharge,
}: Props) {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const { openCreateApartmentModal } = useBuildingManagementModalState();

  function handleClick() {
    setExpanded(!isExpanded);
  }

  return (
    <Stack
      justifyContent={"space-evenly"}
      bgColor={"Background"}
      borderWidth={1}
      borderRadius={5}
      borderColor={"#ccccdd"}
    >
      <Flex
        gap={5}
        alignItems={"center"}
        justifyContent={"space-between"}
        cursor={"pointer"}
        bgColor={"Background"}
        _hover={{ filter: "brightness(0.94)" }}
        onClick={handleClick}
        padding={3}
      >
        <Heading userSelect={"none"}>Edificio #{number}</Heading>
        <Text userSelect={"none"}>{faculty}</Text>
        <Text userSelect={"none"}>{yearOfStudents}</Text>
        <Text userSelect={"none"}>{block}</Text>
        <Text userSelect={"none"}>{availability ? "Disponible" : "No disponible"}</Text>
        <Text userSelect={"none"}>{instructorInCharge}</Text>
        <IconButton
          onClick={handleClick}
          aria-label="Arrow down"
          icon={isExpanded ? <ArrowDownIcon /> : <ArrowRightIcon />}
        />
      </Flex>

      <Stack
        padding={isExpanded ? 3 : 0}
        maxHeight={isExpanded ? "70vh" : 0}
        transition={
          "max-height .3s cubic-bezier(0.075, 0.82, 0.165, 1)"
        }
        overflow={"hidden"}
      >
        {apartments.map((apartment) => (
          <ApartmentDataItem
            id={apartment.id}
            number={apartment.number}
            rooms={apartment.rooms}
          />
        ))}
        <Button onClick={openCreateApartmentModal}>Agregar Apartamento</Button>
      </Stack>
    </Stack>
  );
}
