"use client";

import * as React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import styles from "./CardWide.module.css";

export interface CardWideProps {
  showBarIcon?: boolean;
  showButton?: boolean;
  buttonText?: string;
  titleText: string;
  bodyText: string;
  imageUrl: string;
  imageAlt?: string;
  variant?: "warning" | "info" | "success";
  imagePosition?: "left" | "right";
}

const WarningIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_437656_43044)">
      <path
        d="M10.9993 15.5C10.9993 14.9484 10.5522 14.5013 10.0006 14.5013C9.44907 14.5013 9.00195 14.9484 9.00195 15.5C9.00195 16.0515 9.44907 16.4986 10.0006 16.4986C10.5522 16.4986 10.9993 16.0515 10.9993 15.5ZM10.7401 7.6467C10.6901 7.28066 10.3761 6.99876 9.99642 6.99906C9.5822 6.99939 9.24668 7.33545 9.24701 7.74966L9.25062 12.2513L9.25754 12.353C9.3075 12.7191 9.62152 13.001 10.0012 13.0007C10.4154 13.0003 10.7509 12.6643 10.7506 12.2501L10.747 7.74846L10.7401 7.6467ZM11.9693 2.15888C11.113 0.611084 8.88785 0.611104 8.03162 2.15893L0.286337 16.1604C-0.543222 17.66 0.541403 19.4995 2.25518 19.4995H17.7462C19.46 19.4995 20.5446 17.66 19.715 16.1603L11.9693 2.15888ZM9.34418 2.88501C9.62959 2.36907 10.3713 2.36906 10.6567 2.88499L18.4025 16.8865C18.679 17.3863 18.3175 17.9995 17.7462 17.9995H2.25518C1.68392 17.9995 1.32238 17.3863 1.5989 16.8865L9.34418 2.88501Z"
        fill="#DE590B"
      />
    </g>
    <defs>
      <clipPath id="clip0_437656_43044">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

const SideBar = () => (
  <svg
    width="4"
    height="221"
    viewBox="0 0 4 221"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.29197e-07 219C1.92157e-07 220.105 0.89542 221 1.99998 221V221C3.10453 221 3.99995 220.105 3.99995 219L4 1.99997C4 0.895414 3.10458 -3.37244e-06 2.00002 -3.52979e-06V-3.52979e-06C0.895467 -3.68714e-06 4.72347e-05 0.895416 4.69977e-05 1.99997L4.29197e-07 219Z"
      fill="#DE590B"
    />
  </svg>
);

export const CardWide: React.FC<CardWideProps> = ({
  showBarIcon = true,
  showButton = true,
  buttonText = "Create a Passkey",
  titleText = "Set up multi-factor authentication",
  bodyText = "Create a passkey, Microsoft authenticator, etc. or .............",
  imageUrl,
  imageAlt = "",
  variant = "warning",
  imagePosition = "right",
}) => {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";

  return (
    <div
      className={`${styles.container} ${isDark ? styles.darkContainer : ""} ${!showBarIcon ? styles.containerNoBar : ""}`}
    >
      {showBarIcon && (
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebarIcon}>
            <SideBar />
          </div>
          <div className={styles.iconContainer}>
            <WarningIcon />
          </div>
        </div>
      )}
      <div
        className={`${styles.content} ${styles[`content${imagePosition}`]} ${!showBarIcon ? styles.contentNoBar : ""}`}
      >
        {imagePosition === "left" && (
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={imageAlt} className={styles.image} />
          </div>
        )}
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <div className={styles.title}>{titleText}</div>
            <div className={styles.body}>{bodyText}</div>
          </div>
          {showButton && (
            <button className={styles.button}>
              <span className={styles.buttonText}>{buttonText}</span>
            </button>
          )}
        </div>
      </div>
      {imagePosition === "right" && (
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={imageAlt} className={styles.image} />
        </div>
      )}
    </div>
  );
};

export default CardWide;
