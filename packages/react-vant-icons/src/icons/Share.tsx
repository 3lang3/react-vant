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
      d="M577.281 140.477c0-22.634 13.21-28.354 29.815-12.47L931.54 438.626c16.461 15.782 16.585 41.317.309 57.037L606.787 809.407c-16.296 15.72-29.506 9.917-29.506-12.552V632.761C101.541 632.76 56 881.36 56 881.36s-7.34-501.954 521.281-576.77V140.478z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgShare = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgShare" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgShare;
