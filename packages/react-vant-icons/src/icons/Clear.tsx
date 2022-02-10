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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm176.441 267.887c-10.848-10.848-28.436-10.848-39.284 0L499.665 460.936 362.172 323.443c-10.848-10.848-28.436-10.848-39.284 0-10.848 10.848-10.848 28.436 0 39.284L460.38 500.22 322.888 637.713c-10.848 10.848-10.848 28.436 0 39.284 10.848 10.848 28.436 10.848 39.284 0l137.493-137.493 137.492 137.493c10.848 10.848 28.436 10.848 39.284 0 10.848-10.848 10.848-28.436 0-39.284L538.948 500.22l137.493-137.493c10.848-10.848 10.848-28.436 0-39.284z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgClear = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgClear" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgClear;
