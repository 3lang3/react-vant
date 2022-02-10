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
      d="M428.173 294.05h140.863L716.06 147.025c10.848-10.848 28.436-10.848 39.284 0 10.848 10.848 10.848 28.436 0 39.284l-107.741 107.74h185.73c30.683 0 55.556 24.874 55.556 55.556V794.05c0 30.682-24.873 55.555-55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555V349.605c0-30.682 24.873-55.555 55.556-55.555h182.938l-107.74-107.741c-10.849-10.848-10.849-28.436 0-39.284 10.847-10.848 28.435-10.848 39.283 0L428.173 294.05zm146.59 303.168a27.778 27.778 0 004.339-4.338c9.584-11.98 7.641-29.46-4.338-39.043l-112.967-90.374a27.778 27.778 0 00-17.353-6.087c-15.34 0-27.777 12.437-27.777 27.778v180.747a27.778 27.778 0 006.087 17.353c9.583 11.98 27.064 13.921 39.043 4.338l112.967-90.374z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgLive = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgLive" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgLive;
