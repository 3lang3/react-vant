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
      d="M751.309 662.774l65.753-65.753c16.272-16.272 42.654-16.272 58.926 0 16.272 16.271 16.272 42.653 0 58.925L742.553 789.381c-5.747 7.39-13.93 12.794-23.342 15.006-13.74 3.447-28.896-.202-39.642-10.948-9.954-9.955-13.819-23.693-11.594-36.586V236.047c0-23.012 18.655-41.667 41.667-41.667s41.667 18.655 41.667 41.667v426.727zm-597.832-414.66h361.11c23.013 0 41.667 18.654 41.667 41.666 0 23.012-18.654 41.667-41.666 41.667H153.477c-23.012 0-41.667-18.655-41.667-41.667s18.655-41.667 41.667-41.667zm0 222.222h361.11c23.013 0 41.667 18.654 41.667 41.666 0 23.012-18.654 41.667-41.666 41.667H153.477c-23.012 0-41.667-18.655-41.667-41.667s18.655-41.666 41.667-41.666zm0 222.222h361.11c23.013 0 41.667 18.655 41.667 41.666 0 23.012-18.654 41.667-41.666 41.667H153.477c-23.012 0-41.667-18.655-41.667-41.667 0-23.011 18.655-41.666 41.667-41.666z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgDescending = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgDescending" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgDescending;
