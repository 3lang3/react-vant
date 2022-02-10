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
    <g fillRule="nonzero">
      <path d="M222.222 111.111V887.31l207.715-169.132c40.866-33.275 99.485-33.266 140.34.021l207.5 169.064V111.111H222.223zm0-55.555h555.556c30.682 0 55.555 24.873 55.555 55.555v776.152c0 30.683-24.873 55.556-55.555 55.556a55.556 55.556 0 01-35.092-12.486l-207.5-169.064c-20.428-16.644-49.737-16.648-70.17-.01L257.3 930.39c-23.793 19.373-58.786 15.79-78.16-8.002a55.556 55.556 0 01-12.474-35.078V111.11c0-30.682 24.873-55.555 55.555-55.555z" />
      <path d="M638.889 361.111c15.341 0 27.778 12.437 27.778 27.778 0 91.127-73.135 165.172-163.91 166.644l-2.757.023c-91.88 0-166.395-74.348-166.666-166.164v-.503c0-15.341 12.436-27.778 27.777-27.778 15.341 0 27.778 12.437 27.778 27.778C388.889 450.254 438.635 500 500 500s111.111-49.746 111.111-111.111l.004-.46c.245-15.129 12.586-27.318 27.774-27.318z" />
    </g>
  </svg>
);

const SvgBookmarkO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBookmarkO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBookmarkO;
