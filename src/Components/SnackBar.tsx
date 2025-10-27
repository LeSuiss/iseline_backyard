import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import type { TButtonprops, TSnackbarprops } from "../types/Tsnackbar";
import { useState } from "react";

const SnackBar = () => {
  const [openSnack, setOpenSnack] = useState<boolean>(false);

  const handleClick: TButtonprops["onClick"] = () => {
    setOpenSnack(true);
  };

  const handleClose: TSnackbarprops["onClose"] = () => {
    setOpenSnack(false);
  };

  const action: TSnackbarprops["action"] = (
    <Button size="small" onClick={handleClose}>
      Close
    </Button>
  );

  return (
    <div>
      <h1>Create a snackbar</h1>
      <Button onClick={handleClick}>Open Snackbar</Button>
      {openSnack && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Hello World"
          action={action}
        />
      )}
    </div>
  );
};

export default SnackBar;
