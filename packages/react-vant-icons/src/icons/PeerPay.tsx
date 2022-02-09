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
      d="M888.889 333.333v444.445H111.11V333.333H888.89zm0-111.11v55.555H111.11v-55.556H888.89zm0-55.556H111.11c-30.722 0-55.555 24.833-55.555 55.555v555.556c0 30.722 24.833 55.555 55.555 55.555H888.89c30.667 0 55.555-24.833 55.555-55.555V222.222c0-30.722-24.888-55.555-55.555-55.555zm-340.05 467.45H682.95l-31.111 31.166c-10.889 10.834-10.889 28.39 0 39.278 10.833 10.833 28.389 10.833 39.278 0l78.555-78.555c10.834-10.89 10.834-28.445 0-39.334l-78.555-78.555c-10.89-10.834-28.445-10.834-39.278 0-10.889 10.889-10.889 28.444 0 39.277l31.111 31.167H548.839c-15.333 0-27.778 12.445-27.778 27.778 0 15.333 12.445 27.778 27.778 27.778"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPeerPay = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPeerPay" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPeerPay;
