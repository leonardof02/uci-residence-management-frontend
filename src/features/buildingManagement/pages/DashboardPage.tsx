import { Flex } from "@chakra-ui/react";
import SidePanelMenu from "../components/SidePanelMenu";
import BuildingDataItemList from "../components/BuildingDataItemList";
import CreateBuildingModal from "../components/CreateBuildingModal";
import CreateRoomModal from "../components/CreateRoomModal";
import CreateApartmentModal from "../components/CreateApartmentModal";
import ModalContextProvider from "../contexts/ModalContextProvider";

export default function DashboardPage() {
  return (
    <ModalContextProvider>
      <Flex height={"100vh"}>
        <SidePanelMenu />
        <Flex flex={1} padding={7} overflowY={"scroll"}>
          <BuildingDataItemList />
        </Flex>
        <CreateBuildingModal />
        <CreateApartmentModal />
        <CreateRoomModal />
      </Flex>
    </ModalContextProvider>
  );
}
