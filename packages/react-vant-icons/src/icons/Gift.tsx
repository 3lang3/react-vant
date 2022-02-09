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
      d="M467.48 222.222c-11.44-32.366-42.307-55.555-78.591-55.555-36.284 0-67.152 23.189-78.592 55.555H467.48zm-214.702 0c12.869-63.395 68.918-111.11 136.11-111.11 45.434 0 85.772 21.814 111.112 55.541 25.34-33.727 65.678-55.542 111.111-55.542 67.193 0 123.242 47.716 136.11 111.111h86.112c30.683 0 55.556 24.873 55.556 55.556v166.666c0 30.683-24.873 55.556-55.556 55.556v333.333c0 30.683-24.873 55.556-55.555 55.556H222.222c-30.682 0-55.555-24.873-55.555-55.556V500c-30.683 0-55.556-24.873-55.556-55.556V277.778c0-30.683 24.873-55.556 55.556-55.556h86.111zm279.742 0h157.183c-11.44-32.366-42.308-55.555-78.592-55.555s-67.151 23.189-78.591 55.555zm-88.076 0V888.89h111.112V222.222H444.444z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgGift = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGift" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGift;
