import * as React from "react";

function SvgCheck(props) {
  return (
    <svg
      width={120}
      height={120}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M87.644 37.425L45.262 74.194l-12.907-11.2a5.058 5.058 0 00-6.44 0 3.593 3.593 0 000 5.587l16.127 13.991a5.06 5.06 0 006.44 0l45.6-39.564a3.592 3.592 0 000-5.587 5.06 5.06 0 00-6.438.004z"
        fill="#000"
      />
      <path
        d="M60 0a60 60 0 1060 60A60.069 60.069 0 0060 0zm0 111.429A51.43 51.43 0 11111.429 60 51.487 51.487 0 0160 111.429z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCheck;
