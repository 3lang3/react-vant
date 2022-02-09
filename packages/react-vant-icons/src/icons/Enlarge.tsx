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
      d="M152.667 611.001c23.012 0 41.667 18.655 41.667 41.667l-.001 152.777 152.779.001c23.012 0 41.667 18.655 41.667 41.667s-18.655 41.667-41.667 41.667h-180.54C135.88 888.78 111 863.9 111 833.209v-180.54C111 629.655 129.655 611 152.667 611zm694.446 0c23.012 0 41.667 18.655 41.667 41.667v180.54c0 30.692-24.88 55.572-55.571 55.572h-180.54c-23.013 0-41.668-18.655-41.668-41.667s18.655-41.667 41.667-41.667l152.777.001.001-152.779c0-23.012 18.655-41.667 41.667-41.667zM347.112 111c23.012 0 41.667 18.655 41.667 41.667s-18.655 41.667-41.667 41.667H194.334v152.778c0 23.012-18.655 41.667-41.667 41.667S111 370.124 111 347.112v-180.54C111 135.88 135.88 111 166.571 111h180.54zm486.097 0c30.69 0 55.571 24.88 55.571 55.571v180.54c0 23.013-18.655 41.668-41.667 41.668s-41.667-18.655-41.667-41.667V194.334H652.668c-23.012 0-41.667-18.655-41.667-41.667S629.656 111 652.668 111h180.54z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgEnlarge = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgEnlarge" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgEnlarge;
