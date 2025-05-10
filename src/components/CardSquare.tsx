"use client";

import React from "react";
import { Tooltip } from "@fluentui/react-components";
import styles from "./CardSquare.module.css";

export type CardVariant = "security" | "discovery" | "app" | "setup";

export interface CardSquareProps {
  /**
   * Image URL for the card
   */
  imageUrl: string;
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  /**
   * Title of the card
   */
  title?: string;
  /**
   * Description or body text of the card
   */
  description?: string;
  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
  /**
   * Type of card that affects styling
   */
  variant?: CardVariant;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Whether to show a tooltip on hover
   */
  showTooltip?: boolean;
  /**
   * Tooltip content
   */
  tooltipContent?: string;
}

/**
 * CardSquare component for displaying content in a card format
 */
export const CardSquare: React.FC<CardSquareProps> = ({
  imageUrl,
  imageAlt = "",
  title,
  description,
  className = "",
  variant = "security",
  onClick,
  showTooltip = false,
  tooltipContent = "",
}) => {
  const cardElement = (
    <div
      className={`${styles.cardBase} ${styles[`card${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${className}`}
      onClick={onClick}
    >
      {variant === "app" ? (
        // App-specific layout
        <>
          <img src={imageUrl} alt={imageAlt} className={styles.appIcon} />
          {title && <span className={styles.appName}>{title}</span>}
        </>
      ) : variant === "setup" ? (
        // Setup card layout - just centered image
        <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
      ) : (
        // Standard layout for security and discovery cards
        <div className={styles.cardContent}>
          <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
          {description && (
            <p className={styles.cardDescription}>{description}</p>
          )}
        </div>
      )}
    </div>
  );

  // Wrap with tooltip if requested
  if (showTooltip && tooltipContent) {
    return (
      <Tooltip content={tooltipContent} relationship="description">
        {cardElement}
      </Tooltip>
    );
  }

  return cardElement;
};

export default CardSquare;
