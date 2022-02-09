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
        d="M497.455 222.233l-330.788 607.96h661.576l-330.788-607.96zm48.8-26.552l330.788 607.96c14.664 26.952 4.703 60.688-22.248 75.352a55.556 55.556 0 01-26.552 6.755H166.667c-30.683 0-55.556-24.873-55.556-55.555a55.556 55.556 0 016.756-26.552l330.788-607.96c14.664-26.951 48.4-36.912 75.351-22.248a55.556 55.556 0 0122.249 22.248z"
        fillRule="nonzero"
      />
      <path d="M472.484 400.03c-.091-4.104 2.838-7.43 7.14-7.43h41.266c4.035 0 7.235 3.12 7.14 7.43l-5.877 262.918c-.092 4.103-3.577 7.43-7.343 7.43h-29.107c-3.963 0-7.246-3.12-7.342-7.43l-5.877-262.918zm27.773 353.68c-15.342 0-27.778-12.436-27.778-27.777 0-15.341 12.436-27.778 27.778-27.778 15.34 0 27.777 12.437 27.777 27.778s-12.436 27.778-27.777 27.778z" />
    </g>
  </svg>
);

const SvgWarnO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgWarnO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgWarnO;
