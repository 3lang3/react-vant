import * as React from 'react';

function SvgStop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M340 300h320c22.091 0 40 17.909 40 40v320c0 22.091-17.909 40-40 40H340c-22.091 0-40-17.909-40-40V340c0-22.091 17.909-40 40-40z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgStop;
