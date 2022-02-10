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
      d="M527.778 528.587l249.726-361.92H222.496l249.726 361.92V812.99l55.556 33.334V528.587zm-111.111 17.307L164.748 180.797a44.444 44.444 0 01-7.863-25.241c0-24.546 19.899-44.445 44.445-44.445h597.34c9.017 0 17.82 2.743 25.241 7.863 20.204 13.94 25.28 41.62 11.34 61.823L583.334 545.894v398.55l-166.666-100v-298.55z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgFilterO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgFilterO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgFilterO;
