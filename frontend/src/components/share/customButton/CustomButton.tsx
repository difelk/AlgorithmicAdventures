import React, { ReactElement, useEffect, useMemo, useState } from "react";

import styles from "./CustomButton.module.scss";
import LoaderIcon from "../../../assets/icons/svg/Loader.icon";

type ButtonProps = {
  text?: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactElement;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  variant?: "primary" | "secondary" | "special" | "danger" | "success" | "gray";
  loading?: boolean;
  outlined?: boolean;
  capitalize?: boolean;
  iconSide?: "left" | "right";
  onClick?: () => void;
  subText?: string;
  id?: string;
  download?: boolean;
  secondaryText?: string;
  manualBookingBtnLoader?: boolean;
};

const CustomButton: React.FC<ButtonProps> = ({
  text = "",
  type = "button",
  icon,
  disabled = false,
  className,
  variant = "primary",
  loading = false,
  iconSide = "left",
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(loading ?? false);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const buttonVariantClass = () => {
    switch (variant) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      case "special":
        return styles.specialButton;
      case "success":
        return styles.successButton;
      case "danger":
        return styles.dabgerButton;
      default:
        return styles.primaryButton;
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${iconSide === "right" ? styles.flip : ""}  ${[
        styles.customButton,
        buttonVariantClass(),
      ].join(" ")}`}
    >
      {icon && !isLoading && (
        <div className={styles.customButtonIcon}>{icon}</div>
      )}

      {isLoading && (
        <div className={styles.customButtonIcon}>
          <LoaderIcon size={18} color={"#212121"} />
        </div>
      )}
      <div className={styles.buttonText}>
        <div className={styles.customButtonText}>{text} </div>
      </div>
    </button>
  );
};

export default CustomButton;
