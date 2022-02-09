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
      d="M888.889 166.667c30.667 0 55.555 24.833 55.555 55.555v555.556c0 30.722-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.722 24.888-55.555 55.555-55.555zm0 166.666H111.11v444.445H888.89V333.333zm0-111.11H111.11v55.555H888.89v-55.556zM468.572 697.805c10.834 10.833 28.445 10.833 39.278 0l39.278-39.278c10.833-10.834 10.833-28.445 0-39.278-10.834-10.833-28.445-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278m150.39 0l39.277-39.278c10.833-10.834 10.833-28.445 0-39.278-10.833-10.833-28.445-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278 10.834 10.833 28.445 10.833 39.278 0m111.111 0l39.278-39.278c10.833-10.834 10.833-28.445 0-39.278-10.833-10.833-28.444-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278 10.834 10.833 28.445 10.833 39.278 0"
      fillRule="evenodd"
    />
  </svg>
);

const SvgDebitPay = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgDebitPay" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgDebitPay;
