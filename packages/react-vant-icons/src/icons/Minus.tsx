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
      d="M537.5 537.5h-400c-20.71 0-37.5-16.79-37.5-37.5s16.79-37.5 37.5-37.5h725c20.71 0 37.5 16.79 37.5 37.5s-16.79 37.5-37.5 37.5h-325z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgMinus = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgMinus" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgMinus;
