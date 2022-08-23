import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CarInputs() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="outlined-required"
          label="Hujajt raqami"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Mijoz ismi"
          defaultValue="Kimdur"
        />
        <TextField
          sx={{
            flexBasis: '100%',
            width: 0,
          }}
          required
          id="outlined-required"
          label="joylashuvi"
          defaultValue="O'zbekiston respublikasi"
        />
    </Box>
  );
}
