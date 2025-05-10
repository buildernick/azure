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
        <div
          css={{
            display: "flex",
            color: "rgb(97, 97, 97)",
            alignItems: "center",
            justifyContent: "center",
            left: "-6px",
            position: "absolute",
            top: "-6px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "1px solid #D1D1D1",
            backgroundColor: "white",
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          i
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
          <div className={styles.tileText}>
            {text}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tile;