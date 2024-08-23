import React, { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import TokenGrid from '../Components/TokenGrid';
import TokenForm from '../Components/TokenForm';
import { generateTokens } from '../utils/helpers';

const TokenGenerator = () => {
  const [blueTokens, setBlueTokens] = useState(0);
  const [redTokens, setRedTokens] = useState(0);

  const [bluePrefix, setBluePrefix] = useState('');
  const [redPrefix, setRedPrefix] = useState('');

  const [blueTokensPerRow, setBlueTokensPerRow] = useState(1);
  const [redTokensPerRow, setRedTokensPerRow] = useState(1);
    // Rendering state - only updates when 'Generate' is clicked
  const [renderedBlueTokensPerRow, setRenderedBlueTokensPerRow] = useState(1);
  const [renderedRedTokensPerRow, setRenderedRedTokensPerRow] = useState(1);

  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const handleChange = (name, value) => {
    switch (name) {
      case 'blueTokens':
        setBlueTokens(value);
        break;
      case 'redTokens':
        setRedTokens(value);
        break;
      case 'bluePrefix':
        setBluePrefix(value);
        break;
      case 'redPrefix':
        setRedPrefix(value);
        break;
      case 'blueTokensPerRow':
        setBlueTokensPerRow(value);
        break;
      case 'redTokensPerRow':
        setRedTokensPerRow(value);
        break;
      default:
        break;
    }
  };

  const handleGenerate = () => {
    const blueGeneratedTokens = generateTokens(blueTokens, bluePrefix);
    const redGeneratedTokens = generateTokens(redTokens, redPrefix);
    setRenderedBlueTokensPerRow(blueTokensPerRow);
    setRenderedRedTokensPerRow(redTokensPerRow);
    setTokens({ blue: blueGeneratedTokens, red: redGeneratedTokens });

  };

  const handleClear = () => {
    setBlueTokens(0);
    setRedTokens(0);
    setBluePrefix('');
    setRedPrefix('');
    setBlueTokensPerRow(1);
    setRedTokensPerRow(1);
    setTokens({ blue: [], red: [] });
  };

  // Dynamic fields to render in form
  const fields = [
    { label: 'Number of Blue Tokens', name: 'blueTokens', value: blueTokens, type: 'number' },
    { label: 'Prefix for Blue Tokens', name: 'bluePrefix', value: bluePrefix },
    { label: 'Blue Tokens Per Row', name: 'blueTokensPerRow', value: blueTokensPerRow, type: 'number' },
    { label: 'Number of Red Tokens', name: 'redTokens', value: redTokens, type: 'number' },
    { label: 'Prefix for Red Tokens', name: 'redPrefix', value: redPrefix },
    { label: 'Red Tokens Per Row', name: 'redTokensPerRow', value: redTokensPerRow, type: 'number' },
  ];

  return (
    <Container>
      <TokenForm fields={fields} onChange={handleChange} />
      <Button variant='contained' color="primary" onClick={handleGenerate} fullWidth>Generate</Button>
      <Button variant="outlined" color="secondary" onClick={handleClear} fullWidth>Clear</Button>
      <Box mt ={4}>
      <TokenGrid tokens={tokens.blue} tokensPerRow={renderedBlueTokensPerRow} color="blue" />
      </Box>
      <Box mt={4}>
        <TokenGrid tokens={tokens.red} tokensPerRow={renderedRedTokensPerRow} color="red" />
      </Box>    
    </Container>
  );
};

export default TokenGenerator;
