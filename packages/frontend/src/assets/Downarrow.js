import * as React from "react";

function SvgDownarrow(props) {
  return (
    <svg
      width={132}
      height={81}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.25}>
        <path opacity={0.25} d="M132 0H0v21h132V0z" fill="#5D2CFF" />
        <path opacity={0.25} d="M131.5.5H.5v20h131V.5z" stroke="#707070" />
      </g>
      <path
        d="M91.785 51.457a3.662 3.662 0 00-5.157-.028L69.56 68.441V3.615a3.644 3.644 0 00-7.287 0v64.826l-17.068-17.04a3.689 3.689 0 00-5.157.028 3.629 3.629 0 00.028 5.129l23.262 23.094c.337.315.726.571 1.149.757.442.19.919.284 1.4.28.953 0 1.868-.372 2.55-1.037l23.264-23.094a3.57 3.57 0 00.084-5.101z"
        fill="#5D2CFF"
      />
    </svg>
  );
}

export default SvgDownarrow;
