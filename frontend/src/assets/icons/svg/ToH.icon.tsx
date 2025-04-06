import * as React from "react";

interface Props {
  size?: number;
  color?: string;
}

const TowerOfHanoiIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      width={size ?? "80px"}
      height={size ?? "80px"}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill={color ?? "#333"}
    >
      <g>
        <rect x="14" y="10" width="2" height="36" rx="1" />
        <rect x="31" y="10" width="2" height="36" rx="1" />
        <rect x="48" y="10" width="2" height="36" rx="1" />

        <rect x="8" y="46" width="48" height="4" rx="1" />

        <rect x="10" y="42" width="8" height="2" rx="1" />
        <rect x="9" y="39" width="10" height="2" rx="1" />
        <rect x="8" y="36" width="12" height="2" rx="1" />
        <rect x="7" y="33" width="14" height="2" rx="1" />
        <rect x="6" y="30" width="16" height="2" rx="1" />
      </g>
    </svg>
  );
};

export default TowerOfHanoiIcon;
