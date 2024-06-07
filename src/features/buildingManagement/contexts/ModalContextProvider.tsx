import React, { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

type BuildingManagementModalState = {
  isOpenCreateBuildingModal: boolean;
  isOpenCreateApartmentModal: boolean;
  isOpenCreateRoomModal: boolean;

  openCreateBuildingModal: () => void;
  openCreateApartmentModal: () => void;
  openCreateRoomModal: () => void;

  closeCreateApartmentModal: () => void;
  closeCreateBuildingModal: () => void;
  closeCreateRoomModal: () => void;

  setNumberOfSelectedBuilding: (buildingNumber: number) => void;
  numberOfSelectedBuilding?: number | null;
};

const ModalContext = createContext<BuildingManagementModalState>({
  isOpenCreateApartmentModal: false,
  isOpenCreateBuildingModal: false,
  isOpenCreateRoomModal: false,

  openCreateApartmentModal: () => {},
  openCreateBuildingModal: () => {},
  openCreateRoomModal: () => {},
  closeCreateApartmentModal: () => {},
  closeCreateBuildingModal: () => {},
  closeCreateRoomModal: () => {},

  numberOfSelectedBuilding: null,
  setNumberOfSelectedBuilding: () => {},
});

export function useBuildingManagementModalState() {
  const context = useContext(ModalContext);
  return context;
}

type ModalState = {
  isOpenCreateBuildingModal: boolean;
  isOpenCreateApartmentModal: boolean;
  isOpenCreateRoomModal: boolean;
  numberOfSelectedBuilding: null | number;
};

export default function ModalContextProvider({ children }: Props) {
  const [buildingManagementModalState, setBuildingManagementModalState] =
    useState<ModalState>({
      isOpenCreateBuildingModal: false,
      isOpenCreateApartmentModal: false,
      isOpenCreateRoomModal: false,
      numberOfSelectedBuilding: null,
    });

  function openCreateApartmentModal() {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      isOpenCreateApartmentModal: true,
    });
  }

  function closeCreateApartmentModal() {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      isOpenCreateApartmentModal: false,
    });
  }

  function openCreateBuildingModal() {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      isOpenCreateBuildingModal: true,
    });
  }

  function closeCreateBuildingModal() {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      isOpenCreateBuildingModal: false,
    });
  }

  function openCreateRoomModal() {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      isOpenCreateRoomModal: true,
    });
  }

  function closeCreateRoomModal() {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      isOpenCreateRoomModal: false,
    });
  }

  function setNumberOfSelectedBuilding(buildingNumber: number) {
    setBuildingManagementModalState({
      ...buildingManagementModalState,
      numberOfSelectedBuilding: buildingNumber,
    });
  }

  return (
    <ModalContext.Provider
      value={{
        isOpenCreateApartmentModal:
          buildingManagementModalState.isOpenCreateApartmentModal,
        isOpenCreateBuildingModal:
          buildingManagementModalState.isOpenCreateBuildingModal,
        isOpenCreateRoomModal:
          buildingManagementModalState.isOpenCreateRoomModal,
        closeCreateApartmentModal,
        openCreateApartmentModal,
        closeCreateBuildingModal,
        openCreateBuildingModal,
        openCreateRoomModal,
        closeCreateRoomModal,
        setNumberOfSelectedBuilding,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
