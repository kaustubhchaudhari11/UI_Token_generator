export const generateTokens = (count, prefix) => {
    const tokens = [];
    for (let i = 1; i <= count; i++) {
      tokens.push(`${prefix}${i}`);
    }
    return tokens;
  };