/** @jsx jsx */

import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/*
  Simple button component for GemApp
*/
export const Button = (props) => {
  const {children, className, onClick} = props;

  return (
    <button 
      css={className}
      onClick={onClick} 
      {...props}
    >{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};
