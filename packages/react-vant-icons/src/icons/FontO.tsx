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
      d="M833.224 111c30.683 0 55.556 24.873 55.556 55.556v666.668c0 30.683-24.873 55.556-55.556 55.556H166.556c-30.683 0-55.556-24.873-55.556-55.556V166.556C111 135.873 135.873 111 166.556 111h666.668zm0 55.556H166.556v666.668h666.668V166.556zM694.335 277.667c15.341 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778H527.668v361.112c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778V333.223H305.445c-15.341 0-27.778-12.437-27.778-27.778s12.437-27.778 27.778-27.778h388.89z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgFontO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgFontO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgFontO;
