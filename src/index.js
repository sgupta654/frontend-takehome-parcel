/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";

import { css, jsx } from '@emotion/core';

import GemFinderApp from './components/GemFinderApp/GemFinderApp.component';

let App = document.getElementById("app");

ReactDOM.render(<GemFinderApp />, App);