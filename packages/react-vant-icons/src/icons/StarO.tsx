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
      d="M703.801 621.775l166.747-186.618-244.592-52.965L500 165.938 374.044 382.192l-244.592 52.965 166.747 186.618-25.21 248.988L500 769.845l229.011 100.918-25.21-248.988zM500 830.555L249.75 940.833c-14.04 6.187-30.435-.179-36.621-14.217a27.778 27.778 0 01-2.217-14l27.547-272.08L56.25 436.61c-10.223-11.44-9.235-29 2.205-39.222a27.778 27.778 0 0112.629-6.434l267.276-57.878 137.638-236.31c7.721-13.256 24.727-17.743 37.984-10.022a27.778 27.778 0 0110.022 10.022l137.638 236.31 267.276 57.878c14.994 3.246 24.517 18.033 21.27 33.027a27.778 27.778 0 01-6.435 12.63L761.54 640.534l27.547 272.08c1.546 15.263-9.575 28.89-24.838 30.435-4.78.484-9.603-.28-14-2.218L500 830.556z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgStarO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgStarO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgStarO;
