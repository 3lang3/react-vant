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
      d="M333.223 888.78V388.913c16.865-6.098 29.055-11.298 36.57-15.6 21.001-12.024 38.814-28.398 53.438-49.122 22.191-31.447 26.324-45.937 50.41-133.953 1.582-5.784 4.766-13.686 9.55-23.706 22.138-37.106 53.653-55.617 94.544-55.532 39.504 0 71.104 18.51 94.8 55.532 5.906 10.22 10.087 21.634 12.542 34.245 2.456 12.61 2.456 27.09 0 43.44l-43.731 152.608c-.774 2.422-.774 4.191 0 5.309.834 1.204 2.051 1.806 3.652 1.806h132.855l-.147.309h17.324c51.562 0 93.75 40.625 93.75 92.187 0 7.813-1.563 15.625-3.125 23.438l-46.757 298.593c-9.375 40.625-46.875 70.313-90.625 70.313h-415.05zm-55.556 0H166.556c-30.683 0-55.556-24.873-55.556-55.556v-388.89c0-30.682 24.873-55.555 55.556-55.555h111.111V888.78z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgGoodJob = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGoodJob" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGoodJob;
