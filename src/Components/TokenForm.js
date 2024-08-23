import React from 'react';
import { TextField, Grid, Box } from '@mui/material';

const TokenForm = ({ fields, onChange }) => {
  return (
    <Box mt={4}> {/* Add margin top */}
      <Grid container spacing={3}>
        {fields.map((field, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              label={field.label}
              type={field.type || 'text'}
              value={field.value}
              onChange={(e) => onChange(field.name, e.target.value)}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default TokenForm;