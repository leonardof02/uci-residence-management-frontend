import Header from "../../core/components/Header";
import { Stack, Box, Center } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Stack
      width={"full"}
      backgroundColor={"#00000033"}
      spacing={0}
      minHeight={"100vh"}
    >
      <Header />
      <Box
        flexGrow={1}
        width={"full"}
        height={"full"}
        position={"absolute"}
        top={0}
        left={0}
        filter={"blur(4px)"}
        backgroundImage={"url(/images/login-register-background.jpg)"}
        zIndex={-1}
      ></Box>
      <Center
        width={"full"}
        height={"full"}
        padding={2}
        alignItems={"center"}
        flex={1}
      >
        <LoginForm />
      </Center>
    </Stack>
  );
}
