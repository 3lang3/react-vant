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
      d="M500 817.591L249.75 927.868c-14.04 6.186-30.435-.18-36.621-14.218a27.778 27.778 0 01-2.217-14l27.547-272.08L56.25 423.647c-10.223-11.44-9.235-29 2.205-39.222a27.778 27.778 0 0112.629-6.435l267.276-57.878 137.638-236.31c7.721-13.256 24.727-17.743 37.984-10.022a27.778 27.778 0 0110.022 10.023l137.638 236.31 267.276 57.877c14.994 3.247 24.517 18.034 21.27 33.027a27.778 27.778 0 01-6.435 12.63L761.54 627.57l27.547 272.08c1.546 15.263-9.575 28.889-24.838 30.434-4.78.484-9.603-.28-14-2.217L500 817.59z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgStar = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgStar" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgStar;
