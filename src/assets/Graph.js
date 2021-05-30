import * as React from "react";

function SvgGraph(props) {
  return (
    <svg
      width={135}
      height={130}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#graph_svg__pattern0)" d="M0 0h135v130H0z" />
      <defs>
        <pattern
          id="graph_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#graph_svg__image0"
            transform="matrix(.00963 0 0 .01 .019 0)"
          />
        </pattern>
        <image
          id="graph_svg__image0"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgGraph;
