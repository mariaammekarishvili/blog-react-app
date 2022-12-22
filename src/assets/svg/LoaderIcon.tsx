import * as React from "react";
const LoaderIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h20v20H0z" />
      <path
        fill="white"
        d="M2.546 10.833H4.225a5.835 5.835 0 0 0 11.548 0h1.68a7.501 7.501 0 0 1 -14.908 0zm0 -1.667a7.501 7.501 0 0 1 14.908 0H15.775a5.835 5.835 0 0 0 -11.548 0H2.546z"
      />
    </g>
  </svg>
);
export default LoaderIcon;
