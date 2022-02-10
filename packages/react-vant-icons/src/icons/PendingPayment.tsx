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
      d="M111.111 222.222v555.556H888.89V222.222H111.11zm0-55.555H888.89c30.682 0 55.555 24.873 55.555 55.555v555.556c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555V222.222c0-30.682 24.873-55.555 55.555-55.555zM916.667 361.11v55.556H611.11c-46.024 0-83.333 37.31-83.333 83.333 0 46.024 37.31 83.333 83.333 83.333h305.556v55.556H611.11c-76.706 0-138.889-62.183-138.889-138.889 0-76.706 62.183-138.889 138.89-138.889h305.555zM680.556 541.667c-23.012 0-41.667-18.655-41.667-41.667s18.655-41.667 41.667-41.667c23.011 0 41.666 18.655 41.666 41.667s-18.655 41.667-41.666 41.667z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgPendingPayment = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgPendingPayment" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgPendingPayment;
