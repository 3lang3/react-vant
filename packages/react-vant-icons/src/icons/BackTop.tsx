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
      d="M500.617 247.708c7.533-.345 15.179 2.358 20.931 8.11l275.124 275.124c10.853 10.853 10.853 28.45 0 39.303-10.854 10.853-28.45 10.853-39.304 0L528.292 341.168v506.415c0 15.35-12.443 27.792-27.792 27.792-15.349 0-27.792-12.443-27.792-27.792V341.168L243.632 570.245c-10.854 10.853-28.45 10.853-39.304 0-10.853-10.853-10.853-28.45 0-39.303l275.124-275.124c5.782-5.782 13.478-8.483 21.048-8.105zM778.417 125c15.349 0 27.791 12.443 27.791 27.792 0 15.349-12.442 27.791-27.791 27.791H222.583c-15.349 0-27.791-12.442-27.791-27.791 0-15.35 12.442-27.792 27.791-27.792h555.834z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgBackTop = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBackTop" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBackTop;
