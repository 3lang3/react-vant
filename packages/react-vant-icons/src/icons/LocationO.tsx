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
    <g fillRule="evenodd">
      <path
        d="M500.335 55C684.431 55 833.67 200.948 833.67 380.983c0 164.257-97.838 346.605-293.515 547.044-.331.34-.667.674-1.007 1.005-21.988 21.399-57.16 20.921-78.559-1.067C264.863 726.848 167 544.52 167 380.983 167 200.948 316.24 55 500.335 55zm0 55.556c-153.687 0-277.78 121.355-277.78 270.427 0 146.484 91.26 316.508 277.846 508.235 186.503-191.041 277.713-361.035 277.713-508.235 0-149.072-124.092-270.427-277.779-270.427zm0 444.447c-76.707 0-138.89-62.183-138.89-138.89s62.183-138.89 138.89-138.89 138.89 62.183 138.89 138.89-62.183 138.89-138.89 138.89zm0-55.556c46.024 0 83.334-37.31 83.334-83.334s-37.31-83.334-83.334-83.334-83.334 37.31-83.334 83.334 37.31 83.334 83.334 83.334z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgLocationO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgLocationO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgLocationO;
