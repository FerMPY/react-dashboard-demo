import type { SVGProps } from "react";
const SvgTransactions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#B1B1B1"
      d="M5.208 22.917A2.086 2.086 0 0 0 7.292 25h10.416a2.086 2.086 0 0 0 2.084-2.083v-.912H5.208zM19.792 2.083A2.086 2.086 0 0 0 17.708 0H7.292a2.086 2.086 0 0 0-2.084 2.083v1.042h14.584zM24.71 6.7l-3.125-3.255-1.503 1.443 1.307 1.362h-1.597v2.083h1.71l-1.39 1.332 1.442 1.504 3.125-2.995a1.04 1.04 0 0 0 .03-1.473"
    />
    <path
      fill="#B1B1B1"
      d="M16.667 6.25h3.125V4.167H5.208v12.5h3.125v2.083H5.208v2.083h14.584v-12.5h-3.125zm-1.042 4.167h-3.646a.521.521 0 0 0 0 1.041h1.042a2.603 2.603 0 0 1 .52 5.157v1.093h-2.083v-1.041H9.375v-2.084h3.646a.52.52 0 0 0 0-1.041h-1.042a2.604 2.604 0 0 1-.52-5.157V7.292h2.083v1.041h2.083zM3.498 16.667l1.39-1.332-1.442-1.504L.32 16.826a1.04 1.04 0 0 0-.03 1.473l3.124 3.256 1.503-1.443-1.307-1.362h1.597v-2.083z"
    />
  </svg>
);
export default SvgTransactions;