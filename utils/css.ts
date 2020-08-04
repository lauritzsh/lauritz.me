import { createStyled } from '@stitches/styled';

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      red: 'tomato',
      orange: 'orange',
    },
  },
});

export default { styled, css };
