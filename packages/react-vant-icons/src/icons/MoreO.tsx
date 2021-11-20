import * as React from 'react';

function SvgMoreO(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#323233" fillRule="evenodd">
        <path
          d="M500 881.944c210.942 0 381.944-171.002 381.944-381.944S710.942 118.056 500 118.056 118.056 289.058 118.056 500 289.058 881.944 500 881.944zm0 62.5C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z"
          fillRule="nonzero"
        />
        <circle cx={500} cy={500} r={55.556} />
        <circle cx={277.778} cy={500} r={55.556} />
        <circle cx={722.222} cy={500} r={55.556} />
      </g>
    </svg>
  );
}

export default SvgMoreO;
