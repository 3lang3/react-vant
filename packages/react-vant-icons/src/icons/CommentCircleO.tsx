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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm0 55.555c-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889 214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889zm218.75 166.667c17.259 0 31.25 13.99 31.25 31.25v331.039c0 17.259-13.991 31.25-31.25 31.25H428.142l-32.35 62.325a31.25 31.25 0 01-13.34 13.34c-15.318 7.95-34.182 1.978-42.133-13.34l-32.35-62.325H281.25c-17.259 0-31.25-13.991-31.25-31.25v-331.04c0-17.258 13.991-31.25 31.25-31.25h437.5zm-24.306 55.555H305.556v282.428h36.17l26.33 50.726 26.329-50.726h300.06V333.333z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgCommentCircleO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgCommentCircleO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgCommentCircleO;
