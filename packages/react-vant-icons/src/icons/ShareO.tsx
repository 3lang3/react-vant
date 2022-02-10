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
      d="M607.651 120.192l324.795 316.981c16.478 16.106 16.602 42.164.308 58.206L607.342 815.552c-16.313 16.042-29.538 10.121-29.538-12.809V635.287C109.358 635.287 57.572 880.73 56 888.779l.45-17.767c4.604-91.379 51.475-502.827 521.354-570.618V132.917c0-23.098 13.225-28.935 29.847-12.725zm32.684 120.169l.037 60.033c0 31.772-22.94 58.7-53.8 63.152C386.401 392.425 258.8 488.09 184.921 630.456a551.876 551.876 0 00-11.054 22.547l-3.663 8.373 9.905-5.718c92.745-51.281 215.82-81.075 372.651-83.926l25.044-.226c32.087 0 58.533 24.622 62.147 56.343l.42 7.438-.036 59.127 231.624-227.951L640.335 240.36z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgShareO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgShareO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgShareO;
