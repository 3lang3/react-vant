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
      d="M888.889 166.667c30.667 0 55.555 24.889 55.555 55.555v555.556c0 30.722-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.666 24.888-55.555 55.555-55.555zm0 166.666H111.11v444.445H888.89V333.333zM694.444 611.111c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H305.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h388.888zM888.89 222.222H111.11v55.556H888.89v-55.556z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgIdcard = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgIdcard" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgIdcard;
