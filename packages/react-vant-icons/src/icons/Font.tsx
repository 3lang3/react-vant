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
      d="M833.224 111c30.683 0 55.556 24.873 55.556 55.556v666.668c0 30.683-24.873 55.556-55.556 55.556H166.556c-30.683 0-55.556-24.873-55.556-55.556V166.556C111 135.873 135.873 111 166.556 111h666.668zM694.335 277.667h-388.89c-15.341 0-27.778 12.437-27.778 27.778 0 13.637 9.827 24.978 22.785 27.33l4.993.448h166.667v361.112c0 15.341 12.437 27.778 27.778 27.778 13.637 0 24.978-9.827 27.33-22.785l.448-4.993V333.223h166.667c15.341 0 27.778-12.437 27.778-27.778 0-13.637-9.827-24.978-22.785-27.33l-4.993-.448z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgFont = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgFont" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgFont;
