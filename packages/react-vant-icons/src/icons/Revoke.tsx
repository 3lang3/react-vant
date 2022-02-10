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
      d="M381.087 424.471c9.643 9.643 10.714 24.61 3.215 35.437l-3.215 3.847c-9.642 9.642-24.61 10.714-35.436 3.214l-3.848-3.214-166.667-166.668-2.083-2.327-2.345-3.439-1.619-3.287-1.166-3.47-.62-3.004-.202-1.736-.101-2.964c.03-1.178.13-2.354.303-3.521l-.303 4.106.157-2.968.766-4.15 1.724-4.734 2.275-3.942 2.555-3.166L341.803 91.136c10.848-10.848 28.436-10.848 39.284 0 9.643 9.643 10.714 24.61 3.215 35.437l-3.215 3.847-119.309 119.248h226.335c190.607 0 345.557 148.99 345.557 333.335 0 180.248-148.14 326.695-332.904 333.115l-12.653.22H194.778C179.437 916.337 167 903.9 167 888.56c0-13.637 9.826-24.979 22.785-27.33l4.993-.448h293.335c160.402 0 290.001-124.615 290.001-277.78 0-149.236-123.039-271.37-277.725-277.534l-12.276-.245H261.778l119.31 119.248z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgRevoke = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgRevoke" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgRevoke;
