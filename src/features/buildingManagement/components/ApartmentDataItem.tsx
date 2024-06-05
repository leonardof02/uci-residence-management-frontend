import { Box, Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ApartmentData from "../types/ApartmentData";

type Props = ApartmentData;

const colors = ["#FFB6C1", "#89CFF0", "#E6E6FA", "#98D8D7", "#FFDAB9"];

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Utilizamos desestructuración para intercambiar elementos
  }
  return array;
}

export default function ApartmentDataItem({ id, number, rooms }: Props) {
  return (
    <Stack borderBottomColor={"#dddddd"} borderBottomWidth={1} p={2}>
      <Heading as="h4" size={"40px"}>
        Apartamento #{number}
      </Heading>
      <Flex gap={5}>
        {rooms.map((room, index) => {
          const randomColors = shuffleArray(colors);
          return (
            <Box
              _hover={{ cursor: "pointer", filter: "brightness(0.9)" }}
              key={room.id}
              backgroundColor={randomColors[index % 5]}
              p={2}
              borderRadius={6}
            >
              <Text fontSize={"14px"}>Cuarto #{index + 1}</Text>
            </Box>
          );
        })}
        <Button>
          <AddIcon />
        </Button>
      </Flex>
    </Stack>
  );
}
