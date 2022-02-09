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
      d="M472.222 472.222H277.778C262.437 472.222 250 484.66 250 500s12.437 27.778 27.778 27.778h194.444v194.444C472.222 737.563 484.66 750 500 750s27.778-12.437 27.778-27.778V527.778h194.444C737.563 527.778 750 515.34 750 500s-12.437-27.778-27.778-27.778H527.778V277.778C527.778 262.437 515.34 250 500 250s-27.778 12.437-27.778 27.778v194.444zm-305.555-361.11h666.666c30.683 0 55.556 24.872 55.556 55.555v666.666c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V166.667c0-30.683 24.873-55.556 55.556-55.556z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgAddSquare = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgAddSquare" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgAddSquare;
