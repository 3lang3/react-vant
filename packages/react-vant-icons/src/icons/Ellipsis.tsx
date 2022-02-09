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
      d="M180.556 416.667c38.353 0 69.444 31.091 69.444 69.444s-31.091 69.445-69.444 69.445c-38.354 0-69.445-31.092-69.445-69.445 0-38.353 31.091-69.444 69.445-69.444zm319.444 0c38.353 0 69.444 31.091 69.444 69.444s-31.09 69.445-69.444 69.445c-38.353 0-69.444-31.092-69.444-69.445 0-38.353 31.09-69.444 69.444-69.444zm319.444 0c38.354 0 69.445 31.091 69.445 69.444s-31.091 69.445-69.445 69.445c-38.353 0-69.444-31.092-69.444-69.445 0-38.353 31.091-69.444 69.444-69.444z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgEllipsis = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgEllipsis" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgEllipsis;
