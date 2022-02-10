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
    <g fillRule="evenodd">
      <path
        d="M166.667 166.667v666.666h666.666V166.667H166.667zm0-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v666.666c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V166.667c0-30.683 24.873-55.556 55.556-55.556z"
        fillRule="nonzero"
      />
      <path d="M166.667 277.778h666.666v55.555H166.667zM616.976 608.179L429.09 702.122c-13.721 6.86-30.407 1.3-37.268-12.423a27.778 27.778 0 01-2.932-12.422V489.39c0-15.341 12.436-27.778 27.778-27.778 4.312 0 8.565 1.004 12.422 2.933l187.887 93.943c13.722 6.86 19.284 23.546 12.423 37.268a27.778 27.778 0 01-12.423 12.423zm-61.42-24.846l-111.112-55.555v111.11l111.112-55.555zM277.778 166.667h55.555l55.9 111.11h-55.556zM444.444 166.667H500l55.9 111.11h-55.556zM611.111 166.667h55.556l55.9 111.11H667.01z" />
    </g>
  </svg>
);

const SvgVideoO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgVideoO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgVideoO;
