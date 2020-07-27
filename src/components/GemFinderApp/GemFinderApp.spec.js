import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme'

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import GemFinderApp from "./GemFinderApp.component";
import { GemForm } from '../GemForm/GemForm.component';

describe('GemFinderApp', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GemFinderApp />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    shallow(<GemFinderApp />);
  });
});