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
      d="M305.583 277.756c-46 0-83.333 37.333-83.333 83.333s37.333 83.333 83.333 83.333 83.334-37.333 83.334-83.333-37.334-83.333-83.334-83.333m348.306 49.91c-22.333-26.11-62.833-25.833-84.833.612L333.333 611.11l-71.777-71.833c-21.723-21.722-56.89-21.722-78.612 0l-71.833 71.833V222.222H888.89v379.611l-235-274.166zm235-161H111.11c-30.667 0-55.555 24.834-55.555 55.556v555.555c0 30.667 24.888 55.556 55.555 55.556H888.89c30.722 0 55.555-24.889 55.555-55.555V222.222c0-30.722-24.833-55.555-55.555-55.555z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPhoto = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPhoto" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPhoto;
