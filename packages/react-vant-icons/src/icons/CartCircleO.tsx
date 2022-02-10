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
    <g transform="translate(55 55)" fillRule="nonzero">
      <path d="M445 833.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889C230.223 56.111 56.111 230.223 56.111 445c0 214.777 174.112 388.889 388.889 388.889zm0 55.555C199.54 889.444.556 690.46.556 445S199.54.556 445 .556 889.444 199.54 889.444 445 690.46 889.444 445 889.444z" />
      <path d="M223.131 222.79c30.679 0 55.55 24.866 55.556 55.544h413.767c15.34 0 27.777 12.436 27.777 27.777 0 2.889-.45 5.76-1.335 8.51l-53.64 166.667a27.778 27.778 0 01-26.443 19.268H278.687v55.747h360.875c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H278.687c-30.683 0-55.556-24.873-55.556-55.556v-55.748h-.353v-222.21h-27.425c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h27.778zm431.202 111.099H278.687v111.11l339.885.001 35.76-111.111z" />
      <circle cx={278.333} cy={667.222} r={27.778} />
      <circle cx={611.667} cy={667.222} r={27.778} />
    </g>
  </svg>
);

const SvgCartCircleO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgCartCircleO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgCartCircleO;
