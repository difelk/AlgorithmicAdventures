import * as React from "react";

interface Props {
  size?: number;
  color?: string;
}

const TspIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      width={size ?? "80px"}
      height={size ?? "80px"}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill={color ?? "none"}
      stroke={color ?? "#333"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g>
        <polyline points="12,10 30,6 48,14 54,34 38,50 16,44 12,10" />

        <circle cx="12" cy="10" r="2" fill={color ?? "#333"} />
        <circle cx="30" cy="6" r="2" fill={color ?? "#333"} />
        <circle cx="48" cy="14" r="2" fill={color ?? "#333"} />
        <circle cx="54" cy="34" r="2" fill={color ?? "#333"} />
        <circle cx="38" cy="50" r="2" fill={color ?? "#333"} />
        <circle cx="16" cy="44" r="2" fill={color ?? "#333"} />
      </g>
    </svg>
  );
};

export default TspIcon;
