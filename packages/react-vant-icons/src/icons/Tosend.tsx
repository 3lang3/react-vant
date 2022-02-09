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
      d="M166.667 277.778v555.555h666.666V277.778H166.667zm-55.556-55.556H888.89v611.111c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-611.11zM481.214 388.89a13.534 13.534 0 0113.467 12.188l19.011 190.12 118.698 74.531a13.875 13.875 0 01-11.636 24.956l-176.2-56.827h-.085l.002-.026-.027-.008.035-.076 23.268-232.67a13.534 13.534 0 0113.467-12.188zM798.998 111.11a55.556 55.556 0 0149.69 30.71l40.2 80.401h-62.112l-27.778-55.555H201.002l-27.778 55.555h-62.113l40.2-80.4a55.556 55.556 0 0149.69-30.71z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgTosend = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgTosend" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgTosend;
