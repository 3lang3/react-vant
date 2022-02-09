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
      d="M583.333 861.111c0 46.024-37.31 83.333-83.333 83.333-46.024 0-83.333-37.31-83.333-83.333h166.666zm-83.333-750c15.341 0 27.778 12.437 27.778 27.778l.001 28.919C698.877 181.924 833.333 325.26 833.333 500v277.777h83.334c15.34 0 27.777 12.437 27.777 27.779 0 15.34-12.436 27.777-27.777 27.777H83.333c-15.34 0-27.777-12.436-27.777-27.777 0-15.342 12.436-27.778 27.777-27.778h83.334V500c0-174.74 134.457-318.077 305.555-332.192v-28.92c0-15.34 12.437-27.777 27.778-27.777z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgBell = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBell" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBell;
