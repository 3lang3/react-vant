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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm27.778 333.333h-97.222v55.555h41.666v250h-55.555V750h166.666v-55.556h-55.555V388.89zM500 250c-23.012 0-41.667 18.655-41.667 41.667s18.655 41.666 41.667 41.666 41.667-18.654 41.667-41.666C541.667 268.655 523.012 250 500 250z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgInfo = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgInfo" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgInfo;
