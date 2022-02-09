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
      d="M667.75 521.737L462.214 686.164c-11.98 9.584-29.46 7.642-39.043-4.338a27.778 27.778 0 01-6.087-17.353V335.62c0-15.34 12.436-27.777 27.778-27.777a27.778 27.778 0 0117.352 6.086L667.75 478.356c11.98 9.583 13.922 27.064 4.338 39.043a27.778 27.778 0 01-4.338 4.338zM500 888.89c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPlayCircleO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgPlayCircleO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgPlayCircleO;
