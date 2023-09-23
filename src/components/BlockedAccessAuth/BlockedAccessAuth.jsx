import React from "react";
import { BlockedAccessAuthContainer } from "./styles";
import Authentification from "components/Authentification/Authentification";

const BlockedAccessAuth = () => {
  return (
    <BlockedAccessAuthContainer>
      <Authentification />
    </BlockedAccessAuthContainer>
  );
};

export default BlockedAccessAuth;
