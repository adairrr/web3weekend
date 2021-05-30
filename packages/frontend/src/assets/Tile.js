import * as React from "react";

function SvgTile(props) {
  return (
    <svg
      width={466}
      height={488}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#tile_svg__filter0_d)">
        <path
          d="M437 5H27C15.954 5 7 13.954 7 25v432c0 11.046 8.954 20 20 20h410c11.046 0 20-8.954 20-20V25c0-11.046-8.954-20-20-20z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="tile_svg__filter0_d"
          x={0}
          y={0}
          width={466}
          height={488}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={1} dy={3} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgTile;
