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
      d="M402.785 654.797c138.071 0 250-111.929 250-250s-111.929-250-250-250-250 111.929-250 250 111.929 250 250 250zm236.179-56.12l249.678 249.678c10.848 10.848 10.848 28.436 0 39.284-10.847 10.848-28.435 10.848-39.283 0L599.954 638.234c-53.216 44.993-122.025 72.119-197.169 72.119-168.753 0-305.555-136.802-305.555-305.556S234.032 99.242 402.785 99.242c168.754 0 305.556 136.801 305.556 305.555 0 73.605-26.026 141.132-69.377 193.88z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgSearch = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgSearch" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgSearch;
