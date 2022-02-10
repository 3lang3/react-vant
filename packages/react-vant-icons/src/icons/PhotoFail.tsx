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
      d="M389.334 167l-18.5 55.556H111.556v388.889l71.833-71.833c20.051-20.052 51.558-21.594 73.372-4.628l5.24 4.628 71.777 71.833 102.89-123.5L556 667l-55.556 166.667h-388.89c-28.476 0-51.97-21.46-55.181-49.08L56 778.112V222.556c0-28.528 21.46-51.978 49.08-55.183l6.476-.373h277.778zm500 0c28.528 0 51.978 21.412 55.183 49.07l.373 6.486v555.556c0 28.476-21.412 51.97-49.07 55.182l-6.486.374H611.556L667.112 667 498.389 413.889l71.112-85.278c20.533-24.681 57.182-26.569 80.135-5.481l4.698 4.87 235 274.167V222.556H481.945l18.5-55.556h388.89zM306.028 278.089c15.508 0 30.03 4.243 42.47 11.63l-14.72 43.948 45.282 67.904c-14.188 25.737-41.585 43.185-73.032 43.185-46 0-83.333-37.333-83.333-83.334 0-46 37.333-83.333 83.333-83.333z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPhotoFail = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPhotoFail" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPhotoFail;
