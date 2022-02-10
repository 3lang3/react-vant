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
      d="M409.722 333.333c19.177 0 34.722 15.546 34.722 34.723v263.888c0 19.177-15.545 34.723-34.722 34.723-19.176 0-34.722-15.546-34.722-34.723V368.056c0-19.177 15.546-34.723 34.722-34.723zm180.556 0c19.176 0 34.722 15.546 34.722 34.723v263.888c0 19.177-15.546 34.723-34.722 34.723-19.177 0-34.722-15.546-34.722-34.723V368.056c0-19.177 15.545-34.723 34.722-34.723zM500 888.89c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPauseCircleO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgPauseCircleO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgPauseCircleO;
