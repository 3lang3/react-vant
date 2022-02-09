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
      d="M500 944.444C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444zm-55.95-527.777H361.11c-15.341 0-27.778 12.436-27.778 27.777 0 15.342 12.437 27.778 27.778 27.778h111.111v83.334h-111.11c-15.342 0-27.779 12.436-27.779 27.777 0 15.342 12.437 27.778 27.778 27.778h111.111v111.111C472.222 737.563 484.66 750 500 750s27.778-12.437 27.778-27.778v-111.11h111.11c15.342 0 27.779-12.437 27.779-27.779 0-15.34-12.437-27.777-27.778-27.777H527.778v-83.334h111.11c15.342 0 27.779-12.436 27.779-27.778 0-15.34-12.437-27.777-27.778-27.777h-80.965l79.964-79.964c10.848-10.848 10.848-28.435 0-39.283-10.848-10.848-28.436-10.848-39.284 0l-97.617 97.617-97.617-97.617c-10.848-10.848-28.436-10.848-39.284 0-10.848 10.848-10.848 28.435 0 39.283l79.964 79.964z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgGoldCoin = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGoldCoin" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGoldCoin;
