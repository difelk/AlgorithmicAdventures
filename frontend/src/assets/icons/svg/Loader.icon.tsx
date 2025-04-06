import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const LoaderIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      style={{
        margin: "auto",
        background: "0 0",
        display: "block",
        shapeRendering: "auto",
      }}
      width={size ?? 50}
      height={size ?? 50}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-1.0416666666666665s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(30 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.9469696969696969s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(60 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.8522727272727272s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(90 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.7575757575757576s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(120 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.6628787878787878s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(150 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.5681818181818181s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(180 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.47348484848484845s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(210 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.3787878787878788s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(240 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.28409090909090906s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(270 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.1893939393939394s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(300 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="-0.0946969696969697s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={46}
        y={12}
        rx={4}
        ry={5}
        width={8}
        height={20}
        fill={color ?? "#fff"}
        transform="rotate(330 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1.1363636363636365s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default LoaderIcon;
