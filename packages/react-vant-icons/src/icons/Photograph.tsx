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
      d="M618.416 111.111a55.556 55.556 0 0146.225 24.739l57.581 86.372H888.89c30.682 0 55.555 24.873 55.555 55.556v555.555c0 30.683-24.873 55.556-55.555 55.556H111.11c-30.682 0-55.555-24.873-55.555-55.556V277.778c0-30.683 24.873-55.556 55.555-55.556h166.667l57.581-86.372a55.556 55.556 0 0146.225-24.739h236.832zM500 333.333c-122.73 0-222.222 99.493-222.222 222.223 0 122.73 99.492 222.222 222.222 222.222s222.222-99.493 222.222-222.222c0-122.73-99.492-222.223-222.222-222.223zm0 111.111c61.365 0 111.111 49.747 111.111 111.112 0 61.365-49.746 111.11-111.111 111.11s-111.111-49.745-111.111-111.11S438.635 444.444 500 444.444z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPhotograph = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPhotograph" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPhotograph;
