import BuildingData from "../types/BuildingData";
import JSONBuildingData from "../types/JSONBuildingData";

async function getBuildingList(): Promise<BuildingData[]> {
  const response = await fetch("http://127.0.0.1:8000/api/building/");
  const responseBuildingData: JSONBuildingData[] = await response.json();
  const buildingData: BuildingData[] = responseBuildingData.map((item) => {
    return {
      number: item.number,
      faculty: item.faculty,
      apartments: item.apartments,
      availability: item.availability,
      block: item.block,
      instructorInCharge: item.instructor_in_charge,
      yearOfStudents: item.year_of_students,
    };
  });
  return buildingData;
}

export { getBuildingList };
