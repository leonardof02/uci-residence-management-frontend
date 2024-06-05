import RoomData from "./RoomData";

type ApartmentData = {
    id?: number,
    rooms: RoomData[],
    number: string,
}

export default ApartmentData;