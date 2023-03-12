import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>

      <Button
        sx={{ marginRight: "5px" }}
        variant="outlined"
        color="primary"
        size="small"
        onClick={sumar}
      >
        Sumar
      </Button>
      <Button
        sx={{ marginRight: "5px" }}
        variant="outlined"
        color="warning"
        size="small"
        onClick={restar}
      >
        Restar
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
