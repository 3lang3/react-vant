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
      d="M444.455 125.97c-.183-8.206 5.676-14.859 14.278-14.859h82.534c8.069 0 14.47 6.24 14.278 14.86l-11.753 525.836c-.183 8.207-7.153 14.86-14.685 14.86h-58.214c-7.927 0-14.492-6.24-14.685-14.86L444.455 125.97zM500 833.334c-30.682 0-55.556-24.873-55.556-55.555 0-30.683 24.874-55.556 55.556-55.556s55.556 24.873 55.556 55.556c0 30.682-24.874 55.555-55.556 55.555z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgFail = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgFail" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgFail;
