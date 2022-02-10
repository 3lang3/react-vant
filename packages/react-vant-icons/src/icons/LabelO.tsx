import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M777.778 854.554V111.11H222.222v743.443L500 715.664l277.778 138.89zM222.222 55.556h555.556c30.682 0 55.555 24.873 55.555 55.555v743.443c0 30.682-24.873 55.555-55.555 55.555a55.556 55.556 0 01-24.845-5.865L500 777.778 247.067 904.244c-27.443 13.722-60.814 2.598-74.535-24.845a55.556 55.556 0 01-5.865-24.845V111.11c0-30.682 24.873-55.555 55.555-55.555zm138.89 222.222h277.777c15.341 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.777-27.778 27.777H361.11c-15.341 0-27.778-12.436-27.778-27.777 0-15.342 12.437-27.778 27.778-27.778zm0 166.666h277.777c15.341 0 27.778 12.437 27.778 27.778S654.23 500 638.889 500H361.11c-15.341 0-27.778-12.437-27.778-27.778s12.437-27.778 27.778-27.778z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgLabelO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgLabelO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgLabelO;
