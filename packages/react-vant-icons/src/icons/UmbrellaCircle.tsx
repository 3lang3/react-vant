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
      d="M748.1 500H251.878c-17.111 0-29.778-15.222-27.834-32.278 14.945-129 118.612-229.889 248.167-242.889v-30.389c0-15.333 12.445-27.777 27.778-27.777 15.389 0 27.778 12.444 27.778 27.777v30.39c129.555 13 233.222 113.888 248.166 242.888C777.878 484.778 765.267 500 748.1 500zM527.767 722.222c0 45.945-37.39 83.334-83.334 83.334s-83.333-37.39-83.333-83.334v-27.778c0-15.333 12.444-27.777 27.778-27.777 15.389 0 27.778 12.444 27.778 27.777v27.778c0 15.278 12.5 27.778 27.777 27.778 15.334 0 27.778-12.5 27.778-27.778V555.556h55.556v166.666zM499.989 55.556c-245.445 0-444.445 199-444.445 444.444 0 245.444 199 444.444 444.445 444.444 245.444 0 444.444-199 444.444-444.444 0-245.444-199-444.444-444.444-444.444z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgUmbrellaCircle = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgUmbrellaCircle" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgUmbrellaCircle;
