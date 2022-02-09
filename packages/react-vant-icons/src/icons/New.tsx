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
      d="M833.333 0v631.944c0 80.542-74.619 145.834-166.666 145.834H333.333c-92.047 0-166.666-65.292-166.666-145.834V0h666.666zM306.417 305.556h-28.64v166.666h34.016v-97.828h.782l60.113 97.828h28.346V305.556h-34.015v96.904h-.782l-59.82-96.904zm212.594 0h-96.669v166.666h96.67v-34.188h-60.798v-33.957h57.18v-31.185h-57.18v-33.148h60.797v-34.188zm50.632 0h-37.045l36.85 166.666h33.82l23.751-104.065h.782l23.752 104.065h33.82l36.85-166.666h-37.046l-19.06 112.612h-.782l-23.557-112.612h-28.736l-23.557 112.612h-.782l-19.06-112.612z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgNew = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgNew" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgNew;
