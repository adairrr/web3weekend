import * as React from "react";

function SvgLock(props) {
  return (
    <svg
      width={98}
      height={130}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M85.313 130H12.188A12.198 12.198 0 010 117.813V60.938A12.2 12.2 0 0112.188 48.75h73.125A12.2 12.2 0 0197.5 60.938v56.875A12.201 12.201 0 0185.313 130zM12.188 56.875a4.067 4.067 0 00-4.063 4.063v56.875a4.068 4.068 0 004.063 4.063h73.125a4.068 4.068 0 004.062-4.062V60.938a4.067 4.067 0 00-4.062-4.063H12.188z"
        fill="#000"
      />
      <path
        d="M77.188 56.875a4.064 4.064 0 01-4.062-4.062V32.5a24.375 24.375 0 00-48.75 0v20.313a4.063 4.063 0 01-8.125 0V32.5a32.5 32.5 0 0165 0v20.313a4.064 4.064 0 01-4.063 4.062zM48.75 92.084A10.833 10.833 0 1159.584 81.25 10.844 10.844 0 0148.75 92.084zm0-13.542a2.708 2.708 0 100 5.415 2.708 2.708 0 000-5.415z"
        fill="#000"
      />
      <path
        d="M48.75 108.334a4.064 4.064 0 01-4.062-4.062v-14.9a4.063 4.063 0 018.125 0v14.9a4.065 4.065 0 01-4.063 4.062z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgLock;
