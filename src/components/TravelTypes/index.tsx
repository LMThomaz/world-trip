import { Flex } from "@chakra-ui/react";
import { TravelTypesItem } from "./TravelTypesItem";

export function TravelTypes() {
  return (
    <Flex justify="space-between">
      <TravelTypesItem text="vida noturna" image="/images/icons/cocktail.svg" />
      <TravelTypesItem text="praia" image="/images/icons/surf.svg" />
      <TravelTypesItem text="moderno" image="/images/icons/building.svg" />
      <TravelTypesItem text="clássico" image="/images/icons/museum.svg" />
      <TravelTypesItem text="e mais..." image="/images/icons/earth.svg" />
    </Flex>
  );
}
