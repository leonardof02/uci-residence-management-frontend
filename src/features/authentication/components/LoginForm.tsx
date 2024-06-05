import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { autheticateUser } from "../services/LoginService";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  username: string;
  password: string;
};

const validationSchema = yup.object({
  username: yup.string().required("El nombre de usuario es requerido"),
  email: yup
    .string()
    .email("Debe ingresar un correo electrónico válido")
    .required("El correo es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  async function submitData(data: LoginFormValues) {
    try {
      const token = await autheticateUser(
        data.username,
        data.email,
        data.password
      );
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <Stack
      as="form"
      padding={"5"}
      border={"1px solid #cccccc"}
      backgroundColor={"Background"}
      borderRadius={"5px"}
      maxWidth={"345px"}
      width={"full"}
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
        <FormLabel>Nombre de usuario</FormLabel>
        <Input
          type="text"
          {...register("username")}
          isInvalid={errors.username ? true : false}
        />
        <FormHelperText color={"red"}>
          {errors.username?.message}
        </FormHelperText>
      </FormControl>
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
        <FormHelperText color={"red"}>
          {errors.password?.message}
        </FormHelperText>
      </FormControl>
      <Button
        width={"full"}
        onClick={handleSubmit(submitData)}
        backgroundColor={"#202a62"}
        textColor={"white"}
        _hover={{ filter: "brightness(1.2)" }}
        _active={{
          transform: "scale(0.95)",
          filter: "brightness(1.3)",
        }}
      >
        Enviar
      </Button>
    </Stack>
  );
}
