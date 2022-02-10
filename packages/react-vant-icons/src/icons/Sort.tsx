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
      d="M444.002 160.354l.332 6.313v666.669c0 30.682-24.873 55.555-55.555 55.555-28.491 0-51.973-21.446-55.182-49.076l-.374-6.48V300.78L205.84 428.174c-20.027 20.027-51.54 21.567-73.334 4.621l-5.234-4.621c-20.027-20.027-21.568-51.54-4.622-73.334l4.622-5.234 222.223-222.223c33.476-33.476 89.683-12.253 94.507 32.971zm167-49.354c28.49 0 51.972 21.447 55.181 49.077l.374 6.479v532.557L793.94 571.718c20.027-20.027 51.54-21.568 73.334-4.622l5.234 4.622c20.027 20.027 21.568 51.54 4.622 73.333l-4.622 5.234-222.223 222.223c-33.476 33.477-89.683 12.254-94.507-32.97l-.332-6.314V166.556C555.446 135.873 580.319 111 611 111z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgSort = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgSort" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgSort;
