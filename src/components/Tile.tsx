"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { 
  mergeClasses, 
  tokens,
  useId,
  Theme
} from "@fluentui/react-components";

export interface TileProps {
  /**
   * The image source URL
   */
  imageUrl: string;
  /**
   * Alt text for the image
   */
  imageAlt: string;
  /**
   * Text displayed below the image
   */
  text: string;
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
  imageAlt,
  text,
  className = "",
}) => {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";
  const id = useId("tile");

  // Styles for the tile
  const tileStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    borderRadius: tokens.borderRadiusMedium,
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: isDark ? "#292929" : tokens.colorNeutralBackground1,
    border: `1px solid ${isDark ? "#444444" : tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
    width: "160px",
  };

  // Styles for hover state
  const hoverStyle = {
    boxShadow: tokens.shadow8,
    border: `1px solid ${isDark ? "#666666" : tokens.colorNeutralStroke1Hover}`,
  };

  // Styles for the image container
  const imageContainerStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Styles for the text
  const textStyle: React.CSSProperties = {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    textAlign: "center",
    color: isDark ? "#e1e1e1" : tokens.colorNeutralForeground1,
    marginTop: "8px",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  // Combined className
  const tileClassName = mergeClasses(className);

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={tileClassName}
      style={{
        ...tileStyle,
        ...(isHovered ? hoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyle}>
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div style={textStyle}>{text}</div>
    </div>
  );
};

export default Tile;
