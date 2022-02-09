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
      d="M500 881.944c210.942 0 381.944-171.002 381.944-381.944S710.942 118.056 500 118.056 118.056 289.058 118.056 500 289.058 881.944 500 881.944zm0 62.5C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgCircle = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgCircle" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgCircle;
