import * as React from 'react';

function SvgDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M499.663 56c23.532 0 42.608 19.076 42.608 42.608V805.3l211.318-211.318c16.474-16.473 43.08-16.638 59.755-.494l.503.494c16.473 16.473 16.638 43.08.494 59.755l-.494.502L539.835 928.25c-21.965 21.965-57.44 22.184-79.674.66l-.67-.66L185.48 654.238c-16.64-16.64-16.64-43.617 0-60.257 16.473-16.473 43.079-16.638 59.755-.494l.502.494 211.317 211.317V98.608c0-23.532 19.077-42.608 42.61-42.608z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgDown;
