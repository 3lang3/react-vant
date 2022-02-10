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
      d="M55.556 388.889V222.222c0-30.682 24.873-55.555 55.555-55.555H888.89c30.682 0 55.555 24.873 55.555 55.555V388.89c-61.365 0-111.11 49.746-111.11 111.111s49.745 111.111 111.11 111.111v166.667c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555V611.11c61.365 0 111.11-49.746 111.11-111.111s-49.745-111.111-111.11-111.111zm305.555 0c-15.341 0-27.778 12.436-27.778 27.778 0 15.34 12.437 27.777 27.778 27.777H638.89c15.341 0 27.778-12.436 27.778-27.777 0-15.342-12.437-27.778-27.778-27.778H361.11zm0 166.667c-15.341 0-27.778 12.436-27.778 27.777 0 15.342 12.437 27.778 27.778 27.778H638.89c15.341 0 27.778-12.436 27.778-27.778 0-15.34-12.437-27.777-27.778-27.777H361.11z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgCoupon = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgCoupon" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgCoupon;
