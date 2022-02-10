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
      d="M536.155 105.516l349.721 299.76c11.648 9.984 12.997 27.52 3.013 39.168s-27.52 12.997-39.168 3.013l-16.388-14.046v399.922c0 30.683-24.917 55.56-55.655 55.56h-166.57c-30.738 0-55.655-24.877-55.655-55.56V666.667l-111.559-.004.028 166.674c0 30.682-24.918 55.555-55.656 55.555H222.322c-30.738 0-55.655-24.876-55.655-55.559V433.41l-16.388 14.047c-11.648 9.984-29.184 8.635-39.168-3.013-9.984-11.647-8.635-29.184 3.013-39.168l349.72-299.76c20.806-17.833 51.506-17.833 72.311 0zM500 147.696l-277.679 238.01v447.63h165.946l-.028-166.666c-.004-30.682 24.91-55.559 55.653-55.562l111.56.003c30.738 0 55.656 24.873 55.656 55.556v166.67h166.57V385.706L500 147.696z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgWapHomeO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgWapHomeO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgWapHomeO;
