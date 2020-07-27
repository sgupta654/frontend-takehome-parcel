import { css } from '@emotion/core';
import ls from 'local-storage';

/*
  Gets saved gems from localStorage
*/
export const getLSGems = () => {
  let lsCurrent = ls.get('savedGems');

  if(lsCurrent === null || lsCurrent === undefined) {
    return [];
  }
  else {
    return JSON.parse(lsCurrent);
  }
}

export const savedStyles = (viewSavedGems) => css`
  opacity: 0;
  ${viewSavedGems && `
    transition: opacity 1s ease-out;
    opacity: 1;
    overflow: hidden;
  `};
  vertical-align: top;
  min-width: 50%;
  float: right;
`;

export const savedHeaderStyles = css`
  text-align: center;
  line-height: 2.5rem;
  color: hsl(163, 72%, 47%);
  font-size: 1.5rem;
`;

export const searchResultsStyles = css`
  min-width: 50%;
  float: left;
`;

export const searchResultsHeaderStyles = css`
  text-align: center;
  line-height: 2.5rem;
  color: hsl(163, 72%, 47%);
  font-size: 1.5rem;
`;

export const appHeaderStyles = css`
  background-color: hsl(163, 72%, 47%);
  min-height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const savedButtonStyles = css`
  margin-right: 1rem;
  min-height: 2.4rem;
  font-size: 24px;
  color: hsl(163, 72%, 47%);
  background-color: hsl(0, 0%, 100%);
  border-radius: .5rem;
  border: .2rem solid hsl(0, 0%, 100%);
  padding: .6rem;
  &:active {
    border: .2rem solid hsl(0, 0%, 100%);
    background-color: hsl(163, 72%, 47%);
    color: hsl(0, 0%, 100%);
  }
`;




