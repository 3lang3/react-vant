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
    <g transform="translate(0 55.556)" fillRule="evenodd">
      <path
        d="M132.939 55.364c42.68 0 78.461 32.247 82.885 74.697l3.813 36.605h650.59c30.682 0 55.555 24.874 55.555 55.556 0 5.3-.758 10.571-2.252 15.655l-82.684 281.535c-6.41 21.824-25.475 37.536-48.121 39.658L265.67 608.458l3.5 33.587c1.475 14.15 13.402 24.899 27.629 24.899h534.848c15.341 0 27.778 12.436 27.778 27.777 0 15.342-12.437 27.778-27.778 27.778H296.8c-42.68 0-78.462-32.246-82.885-74.697L160.567 135.82c-1.474-14.15-13.401-24.899-27.628-24.899H55.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h77.383zM259.913 553.2l527.629-49.442 82.684-281.535h-644.8l34.487 330.977z"
        fillRule="nonzero"
      />
      <circle cx={333.333} cy={833.333} r={55.556} />
      <circle cx={722.222} cy={833.333} r={55.556} />
    </g>
  </svg>
);

const SvgShoppingCartO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgShoppingCartO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgShoppingCartO;
