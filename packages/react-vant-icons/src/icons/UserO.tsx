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
      d="M388.889 555.556L500 666.666l111.111-111.11h42.978c8.28 0 16.456 1.85 23.93 5.417l179.244 85.549a55.556 55.556 0 0131.626 50.138v192.229c0 30.682-24.873 55.555-55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555v-192.23a55.556 55.556 0 0131.626-50.137l179.245-85.549a55.556 55.556 0 0123.93-5.417h42.977zm-23.012 55.555h-19.966L166.667 696.66v192.229h666.666v-192.23L654.09 611.112h-19.966L500 745.234 365.877 611.111zM500 55.556c122.73 0 222.222 99.492 222.222 222.222S622.73 500 500 500s-222.222-99.492-222.222-222.222S377.27 55.556 500 55.556zm0 55.555c-92.047 0-166.667 74.62-166.667 166.667S407.953 444.444 500 444.444s166.667-74.619 166.667-166.666c0-92.048-74.62-166.667-166.667-166.667z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgUserO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgUserO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgUserO;
