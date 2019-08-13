import { mount } from 'enzyme';
import wait from 'waait';

/* eslint-disable import/prefer-default-export */
export const mountAndUpdate = async (component) => {
  const wrapper = mount(component);
  await wait(0);
  wrapper.update();

  return wrapper;
};
/* eslint-enable import/prefer-default-export */
