import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type Props = {
  number: number;
  apartments: [];
  faculty: string;
  yearOfStudents: number;
  block: number;
  availability: true;
  instructorInCharge: number;
};

export default function BuildingDataItem({ number, apartments, faculty, yearOfStudents, block, availability, instructorInCharge }: Props) {
  return <Flex>
    <Heading># {number}</Heading>
    <Text>Facultad {faculty}</Text>
    <Text>Ano de los estudiantes: {yearOfStudents} anno</Text>
    <Text>Manzana {block}</Text>
    <Box>{apartments.toString()}</Box>
    <Text>{availability ? "Disponible" : "No disponible"}</Text>
    <Text>Instructor a cargo: {instructorInCharge}</Text>
  </Flex>;
}
