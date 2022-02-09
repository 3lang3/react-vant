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
      d="M166.667 277.778v555.555h666.666V277.778H166.667zm-55.556-55.556H888.89v611.111c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-611.11zm687.887-111.11a55.556 55.556 0 0149.69 30.71l40.2 80.4h-62.112l-27.778-55.555H201.002l-27.778 55.555h-62.113l40.2-80.4a55.556 55.556 0 0149.69-30.71zm-86.502 278.32c.91-.756 2.779-.672 3.376-.062l5.967 6.096c.61.623.557 1.797-.629 3.008l-1.161 1.187c3.48 4.877 2.732 11.643-1.9 16.267L472.58 661.135c-4.32 4.314-10.21 6.082-15.933 5.384-3.013.554-6.371-.443-8.895-3.022l-.884-.902a21.197 21.197 0 01-2.338-2.018L337.485 553.69c-2.044-2.042-3.367-4.56-3.893-7.195a3 3 0 01-.224-1.652 12.776 12.776 0 012.757-8.93l10.004-12.612c4.1-5.17 11.771-6.468 17.193-2.85l86.587 57.793c4.567 3.049 12.428 2.652 16.692-.808l228.8-185.625c4.38-3.553 10.872-3.823 15.486-1.045z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgSign = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgSign" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgSign;
