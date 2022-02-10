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
      d="M99.603 442.736l-4.21 2.285c-19.465 12.73-15.267 44.05 8.77 50.065l294.77 73.701 73.764 294.833c6.417 25.64 41.625 28.707 52.351 4.56L835.772 168.7c10.328-23.25-13.438-47.016-36.688-36.688L99.604 442.736zm657.575-242.297L501.76 762.934l-55.33-231.801-1.612-4.759c-3.377-7.572-10.085-13.231-18.352-15.204l-231.823-55.354 562.534-255.377z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgGuideO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGuideO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGuideO;
