import React from "react";
interface HeartProps {
  fillColor?: boolean;
}
const CustomHeart = ({ fillColor }: HeartProps) => {
  return (
    <div className="w-[25px] h-[25px] flex justify-center items-center">
      <svg
        id="heart_linear"
        data-name="heart/linear"
        xmlns="http://www.w3.org/2000/svg"
        width="25.404"
        height="25.404"
        viewBox="0 0 25.404 25.404"
      >
        <g id="vuesax_linear_heart" data-name="vuesax/linear/heart">
          <g id="heart">
            <path
              id="Vector"
              d="M11.241,18.746a2.308,2.308,0,0,1-1.313,0C6.859,17.7,0,13.326,0,5.917A5.9,5.9,0,0,1,5.885,0a5.838,5.838,0,0,1,4.7,2.371A5.871,5.871,0,0,1,21.17,5.917C21.17,13.326,14.311,17.7,11.241,18.746Z"
              transform="translate(2.117 3.281)"
              fill={`${fillColor ? "#62C483" : "none"}`}
              stroke={`${fillColor ? "none" : "#898989"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0H25.4V25.4H0Z"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CustomHeart;
