/** @jsx jsx */

import { Button } from "../Button/Button.component";
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import { listStyles } from './List.library';

export const List = (props) => {
  const { id, options, renderOption } = props;

  return (
    <ul id={id} css={listStyles}>
      {options.map((option) => {
        return (<li id={option.name} key={option.name}>{renderOption(option)}</li>);
      })}
    </ul>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  options: PropTypes.node,
  renderOption: PropTypes.func
};

