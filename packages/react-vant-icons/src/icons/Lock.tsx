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
      d="M277.778 444.444v-111.11c0-122.73 99.492-222.223 222.222-222.223s222.222 99.492 222.222 222.222v111.111h69.445c23.012 0 41.666 18.655 41.666 41.667v361.111c0 23.012-18.654 41.667-41.666 41.667H208.333c-23.012 0-41.666-18.655-41.666-41.667v-361.11c0-23.013 18.654-41.668 41.666-41.668h69.445zm83.333 0H638.89v-111.11c0-76.707-62.183-138.89-138.889-138.89-76.706 0-138.889 62.183-138.889 138.89v111.11z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgLock = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgLock" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgLock;
