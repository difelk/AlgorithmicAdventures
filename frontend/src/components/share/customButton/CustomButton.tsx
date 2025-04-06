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
  variant?:
    | "primary"
    | "secondary"
    | "special"
    | "danger"
    | "success"
    | "gray"
    | "ghost";
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
  active?: boolean;
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
  active,
}) => {
  const [isLoading, setIsLoading] = useState(loading ?? false);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const buttonVariantClass = () => {
    switch (variant) {
      case "primary":
        return active
          ? [styles.primaryButton, styles.primaryButtonActive].join(" ")
          : styles.primaryButton;
      case "secondary":
        return active
          ? [styles.secondaryButton, styles.secondaryButtonActive].join(" ")
          : styles.secondaryButton;
      case "special":
        return active
          ? [styles.specialButton, styles.specialButtonActive].join(" ")
          : styles.specialButton;
      case "success":
        return active
          ? [styles.successButton, styles.successButtonActive].join(" ")
          : styles.successButton;
      case "danger":
        return active
          ? [styles.dangerButton, styles.dangerButtonActive].join(" ")
          : styles.dangerButton;
      case "ghost":
        return active
          ? [styles.ghostButton, styles.ghostButtonActive].join(" ")
          : styles.ghostButton;
      default:
        return active
          ? [styles.primaryButton, styles.primaryButtonActive].join(" ")
          : styles.primaryButton;
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
