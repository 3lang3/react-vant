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
      d="M500 666.667c-92.047 0-166.667-74.62-166.667-166.667S407.953 333.333 500 333.333 666.667 407.953 666.667 500 592.047 666.667 500 666.667zm388.889-55.556c-61.365 0-111.111-49.746-111.111-111.111s49.746-111.111 111.11-111.111C950.255 388.889 1000 438.635 1000 500s-49.746 111.111-111.111 111.111zm-777.778 0C49.746 611.111 0 561.365 0 500s49.746-111.111 111.111-111.111S222.222 438.635 222.222 500s-49.746 111.111-111.11 111.111z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgWeappNav = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgWeappNav" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgWeappNav;
