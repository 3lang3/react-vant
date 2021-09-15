import glob from 'glob';
import { join } from 'path';
import { render } from 'enzyme';

type Options = {
  skip?: boolean;
};

export default function demoTest(component: string, options: Options = {}) {
  const files = glob.sync(`./src/${component}/demo/*.tsx`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some((c) => file.includes(c))) {
      testMethod = test.skip;
    }

    const path = join(process.cwd(), file);
    testMethod(`renders ${file} correctly`, () => {
      const demo = require(path).default; // eslint-disable-line global-require, import/no-dynamic-require
      const wrapper = render(demo());
      expect(wrapper).toMatchSnapshot();
    });
  });
}
