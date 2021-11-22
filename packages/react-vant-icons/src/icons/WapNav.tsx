import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M159.722 222.222h680.556c26.847 0 48.61 21.764 48.61 48.611 0 26.848-21.763 48.611-48.61 48.611H159.722c-26.847 0-48.61-21.763-48.61-48.61 0-26.848 21.763-48.612 48.61-48.612zm0 243.056h680.556c26.847 0 48.61 21.764 48.61 48.61 0 26.848-21.763 48.612-48.61 48.612H159.722c-26.847 0-48.61-21.764-48.61-48.611 0-26.847 21.763-48.611 48.61-48.611zm0 243.055h680.556c26.847 0 48.61 21.764 48.61 48.611 0 26.848-21.763 48.612-48.61 48.612H159.722c-26.847 0-48.61-21.764-48.61-48.612 0-26.847 21.763-48.61 48.61-48.61z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const SvgWapNav = (props: Omit<IconBaseProps, 'name'>) => {
  return (
    <IconBase name={SvgWapNav.name} {...props}>
      <SvgIcon />
    </IconBase>
  );
};

export default SvgWapNav;
