import { useEffect, useState } from "react";
import BuildingData from "../types/BuildingData";
import { getBuildingList } from "../services/BuildingServices";
import { Stack, Spinner, Button } from "@chakra-ui/react";
import BuildingDataItem from "./BuildingDataItem";
import { useBuildingManagementModalState } from "../contexts/ModalContextProvider";

export default function BuildingDataItemList() {
  const [buildingList, setBuildingList] = useState<BuildingData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const { openCreateBuildingModal } = useBuildingManagementModalState();

  async function getBuildingListFromAPI() {
    const buildingData: BuildingData[] = await getBuildingList();
    setBuildingList(buildingData);
    setLoading(false);
  }

  useEffect(() => {
    getBuildingListFromAPI();
  }, []);

  return (
    <Stack width={"full"}>
      {isLoading ? (
        <Spinner />
      ) : (
        buildingList.map((building) => (
          <BuildingDataItem
            key={building.number}
            instructorInCharge={building.instructorInCharge}
            apartments={building.apartments}
            availability={building.availability}
            block={building.block}
            faculty={building.faculty}
            yearOfStudents={building.yearOfStudents}
            number={building.number}
          />
        ))
      )}
      <Button width={"full"} onClick={openCreateBuildingModal}>
        Agregar edificio
      </Button>
    </Stack>
  );
}
