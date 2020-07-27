/** @jsx jsx */

import { Button } from "../Button/Button.component";
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { gemFormButtonStyles, gemFormInputStyles } from "./GemForm.library";

export const GemForm = (props) => {

  const {className, onChange, onSubmit, query} = props;

  const onSubmitHandler = () => {
    event.preventDefault();
    onSubmit(query);
  };

  const onChangeHandler = (e) => {
    onChange(e.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler} css={className}>
      <input
        css={gemFormInputStyles}
        placeholder={"Search for a gem..."} 
        type="text" 
        onChange={onChangeHandler} 
        value={query} 
      />
      <input css={gemFormButtonStyles}
        type="submit" 
        value="Search Gems"
      />
    </form>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  query: PropTypes.string
};