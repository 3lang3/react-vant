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
      d="M333.333 388.889c0 92.047 74.62 166.667 166.667 166.667s166.667-74.62 166.667-166.667c0-15.341-12.437-27.778-27.778-27.778s-27.778 12.437-27.778 27.778C611.111 450.254 561.365 500 500 500s-111.111-49.746-111.111-111.111c0-15.341-12.437-27.778-27.778-27.778s-27.778 12.437-27.778 27.778zM222.223 55.556h555.555c30.682 0 55.555 24.873 55.555 55.555v776.152c0 30.683-24.873 55.556-55.555 55.556a55.556 55.556 0 01-35.092-12.486l-207.5-169.064c-20.428-16.644-49.737-16.648-70.17-.01L257.3 930.39c-23.793 19.373-58.786 15.79-78.16-8.002a55.556 55.556 0 01-12.474-35.078V111.11c0-30.682 24.873-55.555 55.555-55.555z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgBookmark = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBookmark" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBookmark;
