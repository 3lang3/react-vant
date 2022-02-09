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
      d="M333.333 138.889c46.024 0 83.334 37.31 83.334 83.333v555.556c0 46.024-37.31 83.333-83.334 83.333-46.023 0-83.333-37.31-83.333-83.333V222.222c0-46.024 37.31-83.333 83.333-83.333zm333.334 0c46.023 0 83.333 37.31 83.333 83.333v555.556c0 46.024-37.31 83.333-83.333 83.333-46.024 0-83.334-37.31-83.334-83.333V222.222c0-46.024 37.31-83.333 83.334-83.333z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPause = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPause" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPause;
