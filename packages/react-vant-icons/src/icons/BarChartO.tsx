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
      d="M166.556 430.334v416.668h111.111V430.334H166.556zm0-55.555h111.111c30.683 0 55.556 24.873 55.556 55.555v416.668c0 30.683-24.873 55.556-55.556 55.556H166.556c-30.683 0-55.556-24.873-55.556-55.556V430.334c0-30.682 24.873-55.555 55.556-55.555zm277.778-55.556v527.78h111.112v-527.78H444.334zm0-55.556h111.112c30.682 0 55.555 24.873 55.555 55.556v527.78c0 30.682-24.873 55.555-55.555 55.555H444.334c-30.682 0-55.555-24.873-55.555-55.556v-527.78c0-30.682 24.873-55.555 55.555-55.555zm277.779-111.111v694.446h111.111V152.556H722.113zm0-55.556h111.111c30.683 0 55.556 24.873 55.556 55.556v694.446c0 30.683-24.873 55.556-55.556 55.556H722.113c-30.683 0-55.556-24.873-55.556-55.556V152.556c0-30.683 24.873-55.556 55.556-55.556z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgBarChartO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBarChartO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBarChartO;
