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
      <path d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z" />
      <path d="M496.972 222.222c9.933 0 18.25 7.527 19.239 17.411l27.16 271.601 169.568 106.473c8.466 5.316 11.648 16.104 7.424 25.163-4.225 9.06-14.535 13.556-24.048 10.488l-251.719-81.182-.117.001.003-.038-.038-.011.05-.107 33.24-332.388c.988-9.884 9.305-17.41 19.238-17.41z" />
    </g>
  </svg>
);

const SvgUnderwayO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgUnderwayO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgUnderwayO;
