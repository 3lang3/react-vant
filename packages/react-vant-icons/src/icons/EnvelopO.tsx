import * as React from 'react';

function SvgEnvelopO(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M111.111 222.222v555.556H888.89V222.222H111.11zm0-55.555H888.89c30.682 0 55.555 24.873 55.555 55.555v555.556c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555V222.222c0-30.682 24.873-55.555 55.555-55.555zm-45.104 77.267l34.653-43.424 382.962 305.611c10.155 8.104 24.57 8.087 34.705-.042l380.96-305.527 34.759 43.34-380.961 305.527c-30.405 24.385-73.652 24.437-104.116.126L66.007 243.934z"
        fill="#333"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgEnvelopO;
