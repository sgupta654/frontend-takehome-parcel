import { css } from '@emotion/core';

export const gemFormInputStyles = css`
  border: 0.2rem solid transparent;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-right: 1rem;
  min-height: 2rem;
  padding: 0.5rem;

  &:focus {
    border: 0.2rem solid hsl(0, 0%, 0%);
    box-shadow: 0 0 .2rem hsl(216, 100%, 50%);
    outline: none;
  }
`;

export const gemFormButtonStyles = css`
  background-color: hsl(0, 0%, 100%);
  border: .2rem solid hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  color: hsl(163, 72%, 47%);
  font-size: 1.5rem;
  min-height: 2.4rem;
  padding: 0.6rem;

  &:active {
    border: 0.2rem solid hsl(0, 0%, 100%);
    background-color: hsl(163, 72%, 47%);
    color: hsl(0, 0%, 100%);
  }
`;