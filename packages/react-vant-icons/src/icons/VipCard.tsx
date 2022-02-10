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
      d="M944.444 277.778H55.556v-55.556c0-30.682 24.873-55.555 55.555-55.555H888.89c30.682 0 55.555 24.873 55.555 55.555v55.556zm0 55.555v444.445c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555V333.333h888.888zm-704.61 95.334l84.666 238h47l84.667-238h-42.334l-65.333 194h-1l-65.333-194h-42.334zm241.333 0v238h39v-238h-39zm85.666 0v238h39v-91.334h59c58 0 87-24.666 87-73.666 0-48.667-29-73-86.333-73h-98.667zm39 33.333H662.5c17 0 29.667 3 37.667 9.333 8 6 12.333 16 12.333 30.334 0 14.333-4 24.666-12 31-8 6-20.667 9.333-38 9.333h-56.667v-80z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgVipCard = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgVipCard" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgVipCard;
