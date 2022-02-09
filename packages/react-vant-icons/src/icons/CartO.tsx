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
    <g transform="translate(0 111.111)" fillRule="evenodd">
      <circle cx={333.333} cy={722.222} r={55.556} />
      <circle cx={722.222} cy={722.222} r={55.556} />
      <path
        d="M226.922 167.013l41.762 364.206c1.609 14.025 13.48 24.613 27.597 24.613h488.921c13.443 0 24.956-9.625 27.339-22.855l60.01-333.263c2.718-15.099-7.318-29.543-22.416-32.261a27.778 27.778 0 00-4.923-.44h-618.29zm-6.37-55.556h624.66c4.952 0 9.895.442 14.768 1.32 45.296 8.156 75.403 51.487 67.247 96.782l-60.01 333.264c-7.147 39.689-41.687 68.565-82.015 68.565h-488.92c-42.351 0-77.967-31.765-82.792-73.84L161.054 80.255c-1.608-14.025-13.48-24.613-27.597-24.613H55.556c-15.342 0-27.778-12.437-27.778-27.778S40.214.086 55.556.086h77.901c42.351 0 77.967 31.765 82.791 73.84l4.304 37.531z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgCartO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgCartO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgCartO;
