import { css } from '@emotion/core';

export const gemStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;

export const gemTextStyles = css`
  color: hsl(163, 72%, 47%);
  font-size: 2rem;
`;

export const gemButtonStyles = css`
  background-color: hsl(0, 0%, 100%);
  border: .2rem solid hsl(163, 72%, 47%);
  border-radius: .5rem;
  color: hsl(163, 72%, 47%);
  font-size: 1.5rem;

  &:active {
    background-color: hsl(163, 72%, 47%);
    border: .2rem solid hsl(0, 0%, 100%);
    color: hsl(0, 0%, 100%);
  }
`;