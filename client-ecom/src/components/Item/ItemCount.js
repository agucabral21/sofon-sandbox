import React, { useEffect, useState } from "react";

import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";

function ItemCount({ min, max, changeCount }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    changeCount(count);
  }, [count]);

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <ButtonToolbar className="justify-content-between">
      <ButtonGroup>
        <Button disabled={true} variant="outline-dark">
          {count}
        </Button>
        <Button onClick={decrement}>
          <span className="fa fa-minus"></span>
        </Button>
        <Button onClick={increment}>
          <span className="fa fa-plus"></span>
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ItemCount;
