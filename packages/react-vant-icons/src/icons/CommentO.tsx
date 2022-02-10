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
        d="M500 788.734l81.379-122.068h307.51v-500H111.11v500h307.51L500 788.734zm46.225 30.816a55.556 55.556 0 01-15.408 15.409c-25.53 17.02-60.022 10.12-77.042-15.409l-64.886-97.329H111.11c-30.682 0-55.555-24.873-55.555-55.555v-500c0-30.683 24.873-55.556 55.555-55.556H888.89c30.682 0 55.555 24.873 55.555 55.556v500c0 30.682-24.873 55.555-55.555 55.555H611.11l-64.886 97.33z"
        fillRule="nonzero"
      />
      <path d="M305.556 277.777h388.888c15.342 0 27.778 12.436 27.778 27.777 0 15.342-12.436 27.778-27.778 27.778H305.556c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777zM305.556 444.443h388.888c15.342 0 27.778 12.437 27.778 27.778S709.786 500 694.444 500H305.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778z" />
    </g>
  </svg>
);

const SvgCommentO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgCommentO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgCommentO;
