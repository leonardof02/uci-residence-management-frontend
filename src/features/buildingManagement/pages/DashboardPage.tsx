import { Flex } from "@chakra-ui/react";
import SidePanelMenu from "../components/SidePanelMenu";

export default function DashboardPage() {
  return (
    <Flex minHeight={"100vh"}>
      <SidePanelMenu />
      <Flex flex={1}></Flex>
    </Flex>
  );
}
