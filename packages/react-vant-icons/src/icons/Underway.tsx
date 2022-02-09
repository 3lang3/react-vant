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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm-3.028 166.666c-9.933 0-18.25 7.527-19.239 17.411l-33.238 332.385-.05.11.038.01-.004.04.12-.001 251.716 81.181c9.4 3.032 19.578-1.322 23.894-10.166l.154-.322c4.224-9.06 1.042-19.847-7.424-25.163L543.37 511.234l-27.16-271.6c-.977-9.77-9.113-17.236-18.893-17.409z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgUnderway = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgUnderway" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgUnderway;
