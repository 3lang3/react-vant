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
      <path d="M499.665 460.936l137.492-137.493c10.848-10.848 28.436-10.848 39.284 0 10.848 10.848 10.848 28.436 0 39.284L538.948 500.22l137.493 137.493c10.848 10.848 10.848 28.436 0 39.284-10.848 10.848-28.436 10.848-39.284 0L499.665 539.504 362.172 676.997c-10.848 10.848-28.436 10.848-39.284 0-10.848-10.848-10.848-28.436 0-39.284L460.38 500.22 322.888 362.727c-10.848-10.848-10.848-28.436 0-39.284 10.848-10.848 28.436-10.848 39.284 0l137.493 137.493z" />
      <path
        d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgClose = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgClose" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgClose;
