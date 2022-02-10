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
        d="M798.414 151.086H201.369l-27.734 55.467h-62.014l40.136-80.272a55.467 55.467 0 0149.61-30.661h597.047a55.467 55.467 0 0149.61 30.661l40.137 80.272h.002v610.14c0 30.634-24.833 55.467-55.468 55.467H167.088c-30.634 0-55.467-24.833-55.467-55.468V206.553h714.527l-27.734-55.467zm34.28 110.935l-166.401-.001v332.805l-166.402-64.067-166.402 64.067V262.02h-166.4v554.672h665.605V262.021zm-221.868 0H388.958v252.011l110.933-42.71 110.935 42.71V262.021z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgSendGiftO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgSendGiftO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgSendGiftO;
