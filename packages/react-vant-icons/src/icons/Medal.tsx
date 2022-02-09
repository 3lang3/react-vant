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
      d="M500.006 277.778c184.055 0 333.333 149.222 333.333 333.333 0 184.056-149.278 333.333-333.333 333.333-184.112 0-333.334-149.277-333.334-333.333 0-184.111 149.222-333.333 333.334-333.333zm39.277 215.5c-21.722-21.722-56.889-21.722-78.555 0l-78.556 78.555c-21.722 21.723-21.722 56.834 0 78.556l78.556 78.555c21.666 21.723 56.833 21.723 78.555 0l78.556-78.555c21.722-21.722 21.722-56.833 0-78.556zM666.667 55.56c30.722 0 55.555 24.833 55.555 55.556v111.11l-43.666 43.667c-37.778-19.61-79.278-32.944-123-39.277v-115.5H444.444v115.5c-43.722 6.333-85.222 19.666-123 39.277l-43.666-43.666V111.117c0-30.723 24.833-55.556 55.555-55.556z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgMedal = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgMedal" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgMedal;
