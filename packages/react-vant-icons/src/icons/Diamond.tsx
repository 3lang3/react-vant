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
      d="M766.64 166.667c15.61 0 30.074 7.392 38.107 19.479l133.322 200.596c9.7 14.533 8.223 33.01-3.692 46.137L534.419 874.19c-8.451 9.319-21.096 14.716-34.439 14.699-13.342-.013-25.97-5.442-34.4-14.782L65.622 432.797c-11.915-13.125-13.392-31.601-3.688-46.138l133.318-200.596c8.056-12.052 22.516-19.413 38.108-19.396h533.28zm-72.196 166.666H305.556c-15.342 0-27.778 12.437-27.778 27.778s12.436 27.778 27.778 27.778h388.888c15.342 0 27.778-12.437 27.778-27.778s-12.436-27.778-27.778-27.778z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgDiamond = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgDiamond" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgDiamond;
