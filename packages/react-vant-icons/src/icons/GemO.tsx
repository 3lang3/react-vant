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
      d="M817.895 111.111c11.38 0 21.61 6.942 25.814 17.518L942.7 377.676a27.778 27.778 0 01-5.01 28.668L519.905 878.468c-10.167 11.489-27.722 12.56-39.21 2.394-.87-.77-1.691-1.593-2.458-2.465L63.294 406.237a27.778 27.778 0 01-5.016-28.423l97.052-249.012a27.778 27.778 0 0125.882-17.69h636.683zM627.191 416.666h-265.6l137.494 340.032 128.106-340.032zm227.18 0H686.558l-124.418 330.24 292.23-330.24zm-552.707 0H146.42L433.972 743.87 301.664 416.666zm60.282-250H200.2l-75.786 194.445h180.925l56.608-194.445zm194.6 0H419.808l-56.607 194.445H626.49l-69.943-194.445zm242.499 0H615.587l69.942 194.445h190.803l-77.287-194.444z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgGemO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGemO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGemO;
