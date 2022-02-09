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
      d="M777.778 555.556V111.11H222.222v444.445h555.556zm-388.89 111.11h222.223v-55.555H388.89v55.556zm333.334 55.556H277.778V888.89h444.444V722.222zm55.556-666.666c30.722 0 55.555 24.888 55.555 55.555v444.445c0 30.722-24.833 55.555-55.555 55.555H666.667v55.556h55.555c30.722 0 55.556 24.889 55.556 55.555V888.89c0 30.722-24.834 55.555-55.556 55.555H277.778c-30.722 0-55.556-24.833-55.556-55.555V722.222c0-30.666 24.834-55.555 55.556-55.555h55.555V611.11h-111.11c-30.723 0-55.556-24.833-55.556-55.555V111.11c0-30.667 24.833-55.555 55.555-55.555h555.556zM583.333 833.36c-15.34 0-27.777-12.436-27.777-27.778 0-15.34 12.436-27.777 27.777-27.777h55.556c15.341 0 27.778 12.436 27.778 27.777 0 15.342-12.437 27.778-27.778 27.778h-55.556z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgDesktopO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgDesktopO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgDesktopO;
