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
      d="M555.278 639.333c0 15.334 12.444 27.778 27.778 27.778h166.666c15.334 0 27.778-12.444 27.778-27.778 0-15.333-12.444-27.777-27.778-27.777H583.056c-15.334 0-27.778 12.444-27.778 27.777zm-499.722-306h888.888v444.445c0 30.722-24.833 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V333.333zm888.888-111.11v55.555H55.556v-55.556c0-30.666 24.888-55.555 55.555-55.555H888.89c30.722 0 55.555 24.889 55.555 55.555z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgCard = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgCard" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgCard;
