import React from 'react';
import { Grid } from '@mui/material';

const TokenGrid = ({ tokens, tokensPerRow, color }) => (
  <Grid container spacing={2}>
    {tokens.map((token, index) => (
      <Grid item xs={12 / tokensPerRow} key={index}>
        <div style={{ backgroundColor: color, color: 'white', padding: '10px', textAlign: 'center' }}>
          {token}
        </div>
      </Grid>
    ))}
  </Grid>
);

export default TokenGrid;