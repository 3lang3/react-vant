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
      d="M888.889 277.778v555.555c0 30.723-24.833 55.556-55.556 55.556H166.667c-30.723 0-55.556-24.833-55.556-55.556V277.778H888.89zm-222.222 55.555H333.333v317.945c0 7.555 7.445 12.889 14.667 10.5l134.444-44.834a55.804 55.804 0 0135.112 0L652 661.778c7.222 2.389 14.667-2.945 14.667-10.5V333.333zm132.3-222.239c21.055 0 40.333 11.89 49.722 30.723l40.222 80.389H111.133l40.167-80.39c9.389-18.833 28.667-30.722 49.722-30.722z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgSendGift = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgSendGift" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgSendGift;
