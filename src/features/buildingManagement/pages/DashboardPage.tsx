import { Flex } from "@chakra-ui/react";
import SidePanelMenu from "../components/SidePanelMenu";
import BuildingDataItemList from "../components/BuildingDataItemList";

export default function DashboardPage() {
  return (
    <Flex minHeight={"100vh"}>
      <SidePanelMenu />
      <Flex flex={1}>
        <BuildingDataItemList />
      </Flex>
    </Flex>
  );
}
