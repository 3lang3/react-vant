import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

const SvgEmpty = (props: Omit<IconBaseProps, 'name'>) => {
  return (
    <IconBase name={SvgEmpty.name} {...props}>
      <SvgIcon />
    </IconBase>
  );
};

export default SvgEmpty;
