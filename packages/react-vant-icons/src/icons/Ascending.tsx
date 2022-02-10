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
      d="M777.469 337.249l-65.754 65.753c-16.272 16.272-42.654 16.272-58.925 0-16.272-16.271-16.272-42.653 0-58.925l133.435-133.435c5.747-7.39 13.93-12.794 23.342-15.006 13.74-3.447 28.895.202 39.641 10.948 9.955 9.955 13.82 23.693 11.594 36.586v520.806c0 23.012-18.655 41.667-41.666 41.667-23.012 0-41.667-18.655-41.667-41.667V337.25zm-597.222-89.136h361.11c23.013 0 41.667 18.655 41.667 41.667s-18.654 41.667-41.666 41.667H180.247c-23.012 0-41.667-18.655-41.667-41.667s18.655-41.667 41.667-41.667zm0 222.223h361.11c23.013 0 41.667 18.654 41.667 41.666 0 23.012-18.654 41.667-41.666 41.667H180.247c-23.012 0-41.667-18.655-41.667-41.667s18.655-41.666 41.667-41.666zm0 222.222h361.11c23.013 0 41.667 18.655 41.667 41.666 0 23.012-18.654 41.667-41.666 41.667H180.247c-23.012 0-41.667-18.655-41.667-41.667 0-23.011 18.655-41.666 41.667-41.666z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgAscending = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgAscending" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgAscending;
