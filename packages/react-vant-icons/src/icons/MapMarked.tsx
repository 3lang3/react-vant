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
      d="M747.14 611.111a55.556 55.556 0 0146.162 24.645l148.8 222.223c17.072 25.494 10.243 60.001-15.252 77.072a55.556 55.556 0 01-30.91 9.393H103.434c-30.683 0-55.556-24.873-55.556-55.555a55.556 55.556 0 019.239-30.678l147.189-222.222a55.556 55.556 0 0146.317-24.878l95.176.007C420.123 696.521 500.37 750 500 750c-.369 0 79.877-53.479 154.2-138.882l92.94-.007zm-24.918 222.222v55.556H277.778v-55.556h444.444zM500 111.111c122.73 0 222.222 99.492 222.222 222.222C722.222 518.52 500 685.185 500 685.185S277.778 518.52 277.778 333.333c0-122.73 99.492-222.222 222.222-222.222zM500 250c-46.024 0-83.333 37.31-83.333 83.333 0 46.024 37.31 83.334 83.333 83.334 46.024 0 83.333-37.31 83.333-83.334C583.333 287.31 546.023 250 500 250z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgMapMarked = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgMapMarked" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgMapMarked;
