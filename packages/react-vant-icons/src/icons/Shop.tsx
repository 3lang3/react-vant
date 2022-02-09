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
      <path d="M785.605 194.111c25.493 0 47.714 17.35 53.897 42.082l34.92 139.678c9.397 19.925 14.358 41.79 14.358 64.273 0 47.162-21.651 89.267-55.556 116.918V874.67c0 23.012-18.655 41.667-41.667 41.667H208.222c-23.011 0-41.666-18.655-41.666-41.667V557.062C132.65 529.412 111 487.306 111 440.144c0-22.482 4.96-44.348 14.358-64.273l34.92-139.678c6.183-24.732 28.404-42.082 53.897-42.082h571.43zm-166.667 338.6c-27.592 35.434-70.658 58.227-119.048 58.227s-91.456-22.793-119.048-58.228c-27.592 35.435-70.658 58.228-119.048 58.228-13.734 0-27.039-1.836-39.683-5.276V860.78H777.67V585.662c-12.644 3.44-25.95 5.276-39.683 5.276-48.39 0-91.456-22.793-119.048-58.228zM222.111 83H777.67c15.34 0 27.777 12.437 27.777 27.778s-12.436 27.778-27.777 27.778H222.11c-15.34 0-27.777-12.437-27.777-27.778S206.77 83 222.11 83z" />
    </g>
  </svg>
);

const SvgShop = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgShop" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgShop;
