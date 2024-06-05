import { Button, Flex, Heading, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      minHeight={"60px"}
      backgroundColor={"#202a62"}
      textColor={"white"}
      padding={"2"}
    >
      <Flex height={"full"} width={"full"} gap={2} alignItems={"center"}>
        <Image
          src="/images/uci-logo.png"
          filter={"invert(100%) brightness(300%)"}
          width={"70px"}
          padding={2}
        />
        <Heading as={"h1"} fontSize={"20px"}>
          Beca Admin
        </Heading>
      </Flex>
      <Flex gap={3}>
        <Button>Autenticarse</Button>
        <Button>Registrarse</Button>
      </Flex>
    </Flex>
  );
}
