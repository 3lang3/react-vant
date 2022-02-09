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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm.002 277.777c-187.475 0-277.78 158.9-277.78 166.667 0 7.776 87.893 166.667 277.78 166.667 189.884 0 277.776-158.89 277.776-166.667 0-7.768-90.305-166.667-277.776-166.667zm0 55.556c61.362 0 111.11 49.743 111.11 111.11 0 61.365-49.748 111.112-111.11 111.112-61.366 0-111.113-49.747-111.113-111.112 0-61.367 49.747-111.11 111.113-111.11zm0 55.555c-30.687 0-55.558 24.874-55.558 55.554 0 30.686 24.87 55.557 55.558 55.557 30.68 0 55.554-24.87 55.554-55.557 0-30.68-24.874-55.554-55.554-55.554z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgBrowsingHistory = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgBrowsingHistory" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgBrowsingHistory;
