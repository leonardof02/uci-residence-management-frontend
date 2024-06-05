import { Stack, Image } from "@chakra-ui/react";
import {
  CalendarIcon,
  DragHandleIcon,
  DownloadIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";

export default function SidePanelMenu() {
  return (
    <Stack
      backgroundColor={"#202a62"}
      justifyContent={"space-between"}
      minWidth={"10px"}
      color={"white"}
      paddingY={"10"}
      paddingX={1}
      gap={"10"}
      alignItems={"center"}
    >
      <Stack gap={"10"} alignItems={"center"}>
        <Image
          src="/images/uci-logo.png"
          filter={"invert(100%) brightness(300%)"}
          width={"50px"}
          padding={2}
        />

        <CalendarIcon />
        <DragHandleIcon />
        <DownloadIcon />
      </Stack>
      <ArrowLeftIcon />
    </Stack>
  );
}
