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
      d="M630.638 416.666l-131.53 474.682-140.614-474.682h272.144zm297.916 0l-349.801 395.3 109.534-395.3h240.267zm-628.002 0L416.53 808.18 72.46 416.666h228.092zm77.575-305.555l-72.788 250H64.789l97.312-249.681a.5.5 0 01.466-.319h215.56zm163.57 0l85.482 250H363.202l72.788-250h105.707zm294.71 0a.5.5 0 01.464.315l99.245 249.685H685.892l-85.482-250h235.997z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgGem = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgGem" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgGem;
