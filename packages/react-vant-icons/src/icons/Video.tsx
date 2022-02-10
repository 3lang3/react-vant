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
      d="M888.889 277.778H111.11V166.667c0-30.683 24.873-55.556 55.556-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v111.11zm0 55.555v500c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-500H888.89zM277.778 166.667l55.9 111.11h55.555l-55.9-111.11h-55.555zm166.666 0l55.9 111.11H555.9L500 166.668h-55.556zm166.667 0l55.9 111.11h55.555l-55.9-111.11h-55.555zm5.865 441.512a27.778 27.778 0 0012.423-12.423c6.86-13.722 1.299-30.407-12.423-37.268L429.09 464.545a27.778 27.778 0 00-12.422-2.933c-15.342 0-27.778 12.437-27.778 27.778v187.887c0 4.312 1.004 8.565 2.932 12.422 6.861 13.722 23.547 19.284 37.268 12.423l187.887-93.943z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgVideo = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgVideo" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgVideo;
