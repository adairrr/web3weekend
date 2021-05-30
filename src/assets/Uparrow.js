import * as React from "react";

function SvgUparrow(props) {
  return (
    <svg
      width={132}
      height={81}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.25}>
        <path opacity={0.25} d="M0 80.689h132v-21H0v21z" fill="#5D2CFF" />
        <path opacity={0.25} d="M.5 80.189h131v-20H.5v20z" stroke="#707070" />
      </g>
      <path
        d="M40.215 29.232a3.662 3.662 0 005.157.028L62.44 12.248v64.826a3.644 3.644 0 007.287 0V12.248l17.068 17.04a3.69 3.69 0 005.157-.028 3.629 3.629 0 00-.028-5.129L68.662 1.037A4.091 4.091 0 0067.513.28a3.477 3.477 0 00-1.4-.28c-.953 0-1.868.372-2.55 1.037L40.299 24.131a3.57 3.57 0 00-.084 5.101z"
        fill="#5D2CFF"
      />
    </svg>
  );
}

export default SvgUparrow;
