import * as React from 'react';

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M333.333 138.889c46.024 0 83.334 37.31 83.334 83.333v555.556c0 46.024-37.31 83.333-83.334 83.333-46.023 0-83.333-37.31-83.333-83.333V222.222c0-46.024 37.31-83.333 83.333-83.333zm333.334 0c46.023 0 83.333 37.31 83.333 83.333v555.556c0 46.024-37.31 83.333-83.333 83.333-46.024 0-83.334-37.31-83.334-83.333V222.222c0-46.024 37.31-83.333 83.334-83.333z"
        fill="#323233"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPause;
