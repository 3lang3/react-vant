import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

import mountTest from '../../../tests/shared/mountTest';

describe('Button', () => {
  mountTest(Button);
  mountTest(() => <Button type="primary" />);

  it('renders correctly', () => {
    expect(<Button />).toMatchRenderedSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(<Button />)).not.toThrow();
  });

  it('should render empty button without errors', () => {
    const wrapper = mount(
      <Button>
        {null}
        {undefined}
      </Button>,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should simulate click event', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.simulate('click').length).toEqual(1);
  });

  it('should not emit click event when disabled', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button disabled onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should hide border when color is gradient', () => {
    const wrapper = mount(<Button color="linear-gradient(#000, #fff)" />);
    expect(wrapper.getDOMNode().style.border).toEqual('0px');
  });

  it('should change icon class prefix when using icon-prefix prop', () => {
    const wrapper = mount(<Button icon="success" iconPrefix="my-icon" />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
