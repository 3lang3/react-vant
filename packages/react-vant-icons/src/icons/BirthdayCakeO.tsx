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
        d="M166.667 555.556v277.777h666.666V555.556H166.667zm0-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v277.777c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V555.556c0-30.683 24.873-55.556 55.556-55.556z"
        fillRule="nonzero"
      />
      <path
        d="M277.778 388.889V500h444.444V388.889H277.778zm0-55.556h444.444c30.683 0 55.556 24.873 55.556 55.556V500c0 30.682-24.873 55.556-55.556 55.556H277.778c-30.683 0-55.556-24.874-55.556-55.556V388.889c0-30.683 24.873-55.556 55.556-55.556z"
        fillRule="nonzero"
      />
      <path d="M500 222.222c15.341 0 27.778 12.437 27.778 27.778v111.111c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778V250c0-15.341 12.437-27.778 27.778-27.778zm29.111-89.797c0 30.176-15.225 54.648-34 54.648s-34-24.472-34-54.648c0-30.176 15.225-54.647 34-54.647s34 24.471 34 54.647zM250 666.667h500c15.341 0 27.778 12.436 27.778 27.777 0 15.342-12.437 27.778-27.778 27.778H250c-15.341 0-27.778-12.436-27.778-27.778 0-15.34 12.437-27.777 27.778-27.777z" />
    </g>
  </svg>
);

const SvgBirthdayCakeO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgBirthdayCakeO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgBirthdayCakeO;
