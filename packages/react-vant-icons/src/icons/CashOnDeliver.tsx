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
      <path
        d="M166.667 277.778v555.555h666.666V277.778H166.667zm660.109-55.556l-27.778-55.555H201.002l-27.778 55.555h-62.113l40.2-80.4a55.556 55.556 0 0149.69-30.71h597.997a55.556 55.556 0 0149.69 30.71l40.2 80.4v611.111c0 30.683-24.872 55.556-55.555 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-611.11h715.665z"
        fillRule="nonzero"
      />
      <path d="M500.494 443.253l38.79-38.79c10.848-10.848 28.436-10.848 39.283 0 10.848 10.848 10.848 28.436 0 39.283l-28.475 28.476h19.352c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778h-41.666v27.778h41.666c15.342 0 27.778 12.436 27.778 27.777 0 15.342-12.436 27.778-27.778 27.778h-41.666v27.778c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778V611.11h-41.666c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h41.666v-27.778h-41.666c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h20.34l-28.476-28.476c-10.848-10.847-10.848-28.435 0-39.283 10.848-10.848 28.435-10.848 39.283 0l38.79 38.79z" />
    </g>
  </svg>
);

const SvgCashOnDeliver = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgCashOnDeliver" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgCashOnDeliver;
