import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="ชื่อ"
          name="firstname"
          variant="outlined"
          size="small"
        />
        <TextField
          label="นามสกุล"
          name="lastname"
          variant="outlined"
          size="small"
        />
      </div>
      <div>
        <TextField
          label="เบอร์โทร"
          name="phone"
          variant="outlined"
          size="small"
        />
        <TextField label="อีเมล" name="email" variant="outlined" size="small" />
      </div>
    </Box>
  );
};
export default Form;
