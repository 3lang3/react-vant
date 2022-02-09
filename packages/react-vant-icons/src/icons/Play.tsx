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
      d="M767.38 527.269L378.465 838.402c-11.98 9.584-29.46 7.641-39.044-4.338a27.778 27.778 0 01-6.087-17.353V194.444c0-15.34 12.437-27.777 27.778-27.777a27.778 27.778 0 0117.353 6.087L767.38 483.887c11.979 9.584 13.921 27.064 4.338 39.044a27.778 27.778 0 01-4.338 4.338z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPlay = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPlay" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPlay;
