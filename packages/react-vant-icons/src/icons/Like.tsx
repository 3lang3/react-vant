import * as React from 'react';

function SvgLike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M368.059 804.105L126.947 549.294c-97.106-102.624-94.88-263.899 5.024-363.802 99.112-99.111 259.803-99.111 358.915 0l9.75 9.75 9.762-9.76c99.16-99.161 259.93-99.161 359.09 0 99.996 99.994 102.346 261.378 5.306 364.243l-333.22 353.217a55.555 55.555 0 01-2.406 2.4c-22.38 20.989-57.538 19.86-78.527-2.52l-92.582-98.717z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLike;
