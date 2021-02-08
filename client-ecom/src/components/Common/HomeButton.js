import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link to={"/"}>
      <Button>Volver a Pagina Principal</Button>
    </Link>
  );
}

export default HomeButton;
