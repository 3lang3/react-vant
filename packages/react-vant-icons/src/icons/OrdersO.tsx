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
      d="M778.114 56c30.683 0 55.556 24.873 55.556 55.556v777.781c0 30.683-24.873 55.556-55.556 55.556H222.556c-30.683 0-55.556-24.873-55.556-55.556V111.557C167 80.873 191.873 56 222.556 56h555.558zm0 55.556H222.556v777.781h555.558V111.557zM528.113 667.114c15.341 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778H361.445c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h166.668zm111.112-166.667c15.34 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.778-27.778 27.778h-277.78c-15.34 0-27.777-12.437-27.777-27.778 0-15.342 12.436-27.778 27.777-27.778h277.78zm0-166.668c15.34 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778h-277.78c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h277.78z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgOrdersO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgOrdersO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgOrdersO;
