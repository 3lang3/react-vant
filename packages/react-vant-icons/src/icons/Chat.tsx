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
      d="M500 111.111c245.46 0 444.444 174.112 444.444 388.889 0 214.777-198.984 388.889-444.444 388.889-90.56 0-174.793-23.7-245.042-64.397l-142.484 46.015a27.778 27.778 0 01-19.069-.73c-14.195-5.816-20.988-22.04-15.172-36.235l49.555-120.943C82.112 651.497 55.556 578.462 55.556 500c0-214.777 198.984-388.889 444.444-388.889zm0 333.333c-30.682 0-55.556 24.874-55.556 55.556s24.874 55.556 55.556 55.556 55.556-24.874 55.556-55.556-24.874-55.556-55.556-55.556zm-222.222 0c-30.683 0-55.556 24.874-55.556 55.556s24.873 55.556 55.556 55.556c30.682 0 55.555-24.874 55.555-55.556s-24.873-55.556-55.555-55.556zm444.444 0c-30.682 0-55.555 24.874-55.555 55.556s24.873 55.556 55.555 55.556c30.683 0 55.556-24.874 55.556-55.556s-24.873-55.556-55.556-55.556z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgChat = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgChat" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgChat;
