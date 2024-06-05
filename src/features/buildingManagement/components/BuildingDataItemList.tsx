import { useEffect, useState } from "react";
import BuildingData from "../types/BuildingData";
import { getBuildingList } from "../services/BuildingServices";
import { Stack, Spinner } from "@chakra-ui/react";
import BuildingDataItem from "./BuildingDataItem";

export default function BuildingDataItemList() {
  const [buildingList, setBuildingList] = useState<BuildingData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function getBuildingListFromAPI() {
    const buildingData: BuildingData[] = await getBuildingList();
    setBuildingList(buildingData);
    setLoading(false);
  }

  useEffect(() => {
    getBuildingListFromAPI();
  }, []);

  return (
    <Stack>
      {isLoading ? (
        <Spinner />
      ) : (
        buildingList.map((building, index) => (
          <BuildingDataItem
            key={index}
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
    </Stack>
  );
}
