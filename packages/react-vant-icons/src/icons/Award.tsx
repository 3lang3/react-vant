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
      d="M666.667 761.111v162.157c0 15.341-12.437 27.778-27.778 27.778-3.723 0-7.407-.748-10.835-2.2L521.67 903.78a55.556 55.556 0 00-43.338 0l-106.385 45.065c-14.126 5.983-30.429-.617-36.413-14.743a27.778 27.778 0 01-2.2-10.835V761.111c50.515 23.997 107.023 37.424 166.667 37.424 59.644 0 116.152-13.427 166.667-37.424zM500 83.333c184.095 0 333.333 149.239 333.333 333.334S684.095 750 500 750c-184.095 0-333.333-149.238-333.333-333.333 0-184.095 149.238-333.334 333.333-333.334zm0 222.223c-61.365 0-111.111 49.746-111.111 111.11 0 61.366 49.746 111.112 111.111 111.112s111.111-49.746 111.111-111.111S561.365 305.556 500 305.556z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgAward = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgAward" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgAward;
