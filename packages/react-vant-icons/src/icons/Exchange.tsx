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
      <path d="M825.755 697.333H305.222c-15.341 0-27.778 12.437-27.778 27.778s12.437 27.778 27.778 27.778h516.613l-85.328 85.328c-10.848 10.848-10.848 28.436 0 39.284 10.848 10.848 28.436 10.848 39.284 0l130.78-130.78c13.017-13.017 13.017-34.123 0-47.14l-133.001-133c-10.848-10.849-28.436-10.849-39.284 0-10.848 10.847-10.848 28.435 0 39.283l91.47 91.47zM173.578 252.889h520.533c15.341 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.777-27.778 27.777H177.498l85.329 85.329c10.847 10.848 10.847 28.436 0 39.284-10.848 10.847-28.436 10.847-39.284 0l-130.78-130.78c-13.017-13.018-13.017-34.123 0-47.14l133-133.001c10.848-10.848 28.436-10.848 39.284 0 10.848 10.848 10.848 28.436 0 39.284l-91.469 91.469z" />
    </g>
  </svg>
);

const SvgExchange = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgExchange" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgExchange;
