"use client";

import React from "react";
import Image from "next/image";
import styles from "./Tile.module.css";

export interface TileProps {
  /**
   * The image source URL
   */
  imageUrl: string;
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  /**
   * Text displayed below the image
   */
  text: string;
  /**
   * Whether to show the info icon in the top left
   */
  showInfoIcon?: boolean;
  /**
   * Whether to show the menu dots in the top right
   */
  showMenuIcon?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional className to add to the tile container
   */
  className?: string;
}

/**
 * Tile component for displaying an application or feature with image and text
 */
const Tile: React.FC<TileProps> = ({
  imageUrl,
  imageAlt = "",
  text,
  showInfoIcon = true,
  showMenuIcon = true,
  onClick,
  className = "",
}) => {
  return (
    <>
      <div className={`${styles.tileContainer} ${className}`} onClick={onClick}>
        <div className={styles.tileContent}>
          {showInfoIcon && (
            <div className={styles.infoIcon}>
              <span className={styles.iconFabric}>ℹ</span>
            </div>
          )}
          {showMenuIcon && (
            <div className={styles.menuIcon}>
              <span className={styles.iconFabric}>⋮</span>
            </div>
          )}
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={60}
            height={60}
            className={styles.tileImage}
            unoptimized
          />
          <div className={styles.tileText}>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Tile;
