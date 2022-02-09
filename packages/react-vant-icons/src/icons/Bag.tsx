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
      d="M333.333 277.778c0-92.048 73.287-166.667 163.69-166.667 90.405 0 163.691 74.62 163.691 166.667h95.433c19.966 0 36.49 15.524 37.735 35.45l36.94 591.05c1.303 20.84-14.535 38.79-35.376 40.093-.785.049-1.571.073-2.358.073H206.912c-20.881 0-37.809-16.927-37.809-37.808 0-.787.025-1.573.074-2.359l36.94-591.049c1.246-19.926 17.77-35.45 37.736-35.45h89.48zm55.556 0h216.27c0-61.587-48.64-111.111-108.135-111.111-59.495 0-108.135 49.524-108.135 111.11z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgBag = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBag" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBag;
