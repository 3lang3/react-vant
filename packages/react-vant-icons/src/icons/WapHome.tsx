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
      d="M535.867 115.379l349.83 299.854c11.651 9.987 13 27.529 3.013 39.18-9.987 11.652-27.528 13.001-39.18 3.014l-16.414-14.098.022 400.095c0 30.692-24.926 55.576-55.673 55.576H610.843c-30.747 0-55.673-24.884-55.673-55.576V676.705H444.127v166.719l-.522.003c0 30.692-24.926 55.573-55.673 55.573H221.936c-30.748 0-55.673-24.884-55.673-55.576l-.021-400.095-16.372 14.098c-11.651 9.987-29.193 8.638-39.18-3.014-9.987-11.651-8.638-29.193 3.014-39.18l349.83-299.854c20.811-17.839 51.521-17.839 72.333 0z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgWapHome = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgWapHome" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgWapHome;
