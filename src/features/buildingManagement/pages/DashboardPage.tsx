import { Flex } from "@chakra-ui/react";
import SidePanelMenu from "../components/SidePanelMenu";
import BuildingDataItemList from "../components/BuildingDataItemList";

export default function DashboardPage() {
  return (
    <Flex height={"100vh"}>
      <SidePanelMenu />
      <Flex flex={1} padding={7} overflowY={"scroll"}>
        <BuildingDataItemList />
      </Flex>
    </Flex>
  );
}
