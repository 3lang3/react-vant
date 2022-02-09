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
        d="M152.319 799.259l109.094-35.232 21.394 12.394C346.44 813.285 421.373 833.333 500 833.333c216.305 0 388.889-151.01 388.889-333.333 0-182.322-172.584-333.333-388.889-333.333S111.111 317.677 111.111 500c0 64.355 21.336 126.044 61.174 179.336l18.843 25.206-38.81 94.717zM500 888.889c-90.56 0-174.793-23.7-245.042-64.397l-142.484 46.015a27.778 27.778 0 01-19.069-.73c-14.195-5.816-20.988-22.04-15.172-36.235l49.555-120.943C82.112 651.497 55.556 578.462 55.556 500c0-214.777 198.984-388.889 444.444-388.889S944.444 285.223 944.444 500c0 214.777-198.984 388.889-444.444 388.889z"
        fillRule="nonzero"
      />
      <circle cx={500} cy={500} r={55.556} />
      <circle cx={277.778} cy={500} r={55.556} />
      <circle cx={722.222} cy={500} r={55.556} />
    </g>
  </svg>
);

const SvgChatO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgChatO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgChatO;
