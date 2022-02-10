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
      d="M340 300h320c22.091 0 40 17.909 40 40v320c0 22.091-17.909 40-40 40H340c-22.091 0-40-17.909-40-40V340c0-22.091 17.909-40 40-40z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgStop = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgStop" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgStop;
