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
      <path d="M500.445 56c245.46 0 444.445 198.985 444.445 444.445 0 245.46-198.985 444.445-444.445 444.445C254.985 944.89 56 745.905 56 500.445 56 254.985 254.985 56 500.445 56zm266.059 282.106c-5.706-5.318-15.835-5.814-22.457-1.049l-.308.227-294.172 222.751c-5.386 4.079-15.236 4.61-21.148 1.159l-.313-.189-111.327-69.351c-6.867-4.278-16.54-2.83-21.866 3.144l-.24.275-12.861 15.134c-5.423 6.38-4.52 15.259 1.484 21.081l.265.252 137.63 128.264c10.007 9.327 25.908 9.816 35.757.95l.306-.28 315.733-294.249c6.523-6.078 7.056-15.241 1.012-21.13l-.249-.236-7.246-6.753z" />
    </g>
  </svg>
);

const SvgChecked = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgChecked" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgChecked;
