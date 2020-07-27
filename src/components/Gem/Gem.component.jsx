/** @jsx jsx */

import { useCallback } from "react";
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import {gemStyles, gemButtonStyles, gemTextStyles} from "./Gem.library";

export const Gem = (props) => {
  const {id, name, onClick, saved, version } = props;

  const changeGemStatus = useCallback(
    () => {
      onClick({id:id, name: name, saved: !saved, version: version});
    },
    [onClick],
  );

  return (
    <div css={gemStyles}>
      <span css={css`
        min-width: 30rem;
        ${gemTextStyles}
      `}>{name}</span>

      <span css={css`
        min-width: 12rem;
        ${gemTextStyles}
      `}>{version}</span>

      <button css={gemButtonStyles}
        onClick={changeGemStatus}
      >{saved ? 'Unsave' : 'Save'}</button>
    </div>
  );
};

Gem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  saved: PropTypes.bool,
  version: PropTypes.string,
};