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
    <g fillRule="evenodd">
      <path
        d="M500 857.143c197.245 0 357.143-159.898 357.143-357.143 0-197.245-159.898-357.143-357.143-357.143-197.245 0-357.143 159.898-357.143 357.143 0 197.245 159.898 357.143 357.143 357.143zm0 59.524C269.881 916.667 83.333 730.119 83.333 500 83.333 269.881 269.881 83.333 500 83.333c230.119 0 416.667 186.548 416.667 416.667 0 230.119-186.548 416.667-416.667 416.667z"
        fillRule="nonzero"
      />
      <circle cx={347.002} cy={392.857} r={47.619} />
      <circle cx={655.644} cy={392.857} r={47.619} />
      <path
        d="M684.632 549.606c5.477-15.498 22.481-23.62 37.979-18.143 15.497 5.478 23.62 22.481 18.142 37.979C705.315 669.706 610.25 738.095 502.18 738.095c-108.07 0-203.136-68.39-238.574-168.653-5.478-15.498 2.645-32.501 18.143-37.979 15.497-5.477 32.5 2.645 37.978 18.143 27.095 76.658 99.805 128.965 182.453 128.965 82.647 0 155.357-52.307 182.452-128.965z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgSmileO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgSmileO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgSmileO;
