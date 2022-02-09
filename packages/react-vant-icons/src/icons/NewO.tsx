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
      d="M222.222 55.556v576.388c0 48.087 48.219 90.278 111.111 90.278h333.334c62.892 0 111.11-42.191 111.11-90.278V55.556H222.223zM166.667 0h666.666v631.944c0 80.542-74.619 145.834-166.666 145.834H333.333c-92.047 0-166.666-65.292-166.666-145.834V0zm145.126 472.222h-34.015V305.556h28.639l59.82 96.904h.782v-96.904h34.015v166.666h-28.346l-60.113-97.828h-.782v97.828zm207.218-34.188v34.188h-96.669V305.556h96.67v34.188h-60.798v33.148h57.18v31.185h-57.18v33.957h60.797zm108.008-69.877l-23.752 104.065h-33.82l-36.85-166.666h37.046l19.06 112.612h.782l23.557-112.612h28.736l23.557 112.612h.782l19.06-112.612h37.045l-36.85 166.666h-33.82l-23.751-104.065h-.782z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgNewO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgNewO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgNewO;
