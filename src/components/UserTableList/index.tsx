import { Table } from "@chakra-ui/react";

import { UserTbody } from "./UserTbody";
import { UserThead } from "./UserTHead";

export function UserTableList() {
  return (
    <Table colorScheme="whiteAlpha">
      <UserThead />
      <UserTbody />
    </Table>
  );
}
