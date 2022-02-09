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
      d="M166 140.971C166 110.06 191.32 85 221.693 85h555.28c30.76 0 55.694 24.94 55.694 55.971v721.391c0 30.912-25.32 55.971-55.693 55.971H221.693c-30.758 0-55.693-24.94-55.693-55.971v-721.39zm138.889 55.14c-15.341 0-27.778 12.437-27.778 27.778v277.778c0 15.34 12.437 27.777 27.778 27.777h388.889c15.341 0 27.778-12.436 27.778-27.777V223.889c0-15.341-12.437-27.778-27.778-27.778h-388.89zm0 444.445c-15.341 0-27.778 12.436-27.778 27.777 0 15.342 12.437 27.778 27.778 27.778h388.889c15.341 0 27.778-12.436 27.778-27.778 0-15.34-12.437-27.777-27.778-27.777h-388.89zm0 111.11c-15.341 0-27.778 12.437-27.778 27.778 0 15.342 12.437 27.778 27.778 27.778H527.11c15.341 0 27.778-12.436 27.778-27.778 0-15.34-12.437-27.777-27.778-27.777H304.89z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgGraphic = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGraphic" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGraphic;
