import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type LoginFormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un correo electrónico válido")
    .required("El correo es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
});

function App() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  });

  async function submitData(data: LoginFormValues) {
    console.log(data);
  }

  return (
    <Box width={"full"} minHeight={"100vh"}>
      <Center width={"full"} height={"100vh"}>
        <Stack
          as="form"
          padding={"5"}
          boxShadow={"0px 4px 10px 1px #f1f1f1"}
          spacing={"3"}
        >
          <Heading
            as={"h4"}
            size={"md"}
            width={"full"}
            textAlign={"center"}
            marginBottom={"20px"}
          >
            Autenticarse
          </Heading>
          <FormControl>
            <FormLabel>Correo UCI</FormLabel>
            <Input
              type="text"
              {...register("email")}
              isInvalid={errors.email ? true : false}
            />
            <FormHelperText color={"red"}>{errors.email?.message}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={errors.password ? true : false}>
            <FormLabel>Contrasena</FormLabel>
            <Input
              type="password"
              {...register("password")}
              isInvalid={errors.email ? true : false}
            />
            <FormHelperText color={"red"}>{errors.password?.message}</FormHelperText>
          </FormControl>
          <Button width={"full"} onClick={handleSubmit(submitData)}>
            Enviar
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}

export default App;
