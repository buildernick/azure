"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { mergeClasses, tokens, useId, Theme } from "@fluentui/react-components";

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
  /**
   * Show info icon in top left
   */
  showInfo?: boolean;
  /**
   * Show menu icon in top right
   */
  showMenu?: boolean;
}

/**
 * Tile component for displaying an application or feature with image and text
 */
const Tile: React.FC<TileProps> = ({
  imageUrl,
  imageAlt,
  text,
  className = "",
  showInfo,
  showMenu,
}) => {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";
  const id = useId("tile");

  // Styles for the tile
  const tileStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "161px",
    height: "140px",
    padding: "16px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: isDark ? "#292929" : "#FFFFFF",
    border: `1px solid ${isDark ? "#444444" : "#ECECEC"}`,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 0.3px 0.9px 0px, rgba(0, 0, 0, 0.13) 0px 1.6px 3.6px 0px",
    position: "relative",
  };

  // Styles for hover state
  const hoverStyle = {
    boxShadow: tokens.shadow8,
    border: `1px solid ${isDark ? "#666666" : tokens.colorNeutralStroke1Hover}`,
  };

  // Styles for the image container
  const imageContainerStyle: React.CSSProperties = {
    width: "60px",
    height: "60px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    overflow: "hidden",
  };

  // Styles for the text
  const textStyle: React.CSSProperties = {
    flex: 1,
    color: isDark ? "#e1e1e1" : "#323130",
    textAlign: "center",
    fontFamily: "'Open Sans', -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    height: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  // Styles for the icons
  const iconStyle: React.CSSProperties = {
    display: "flex",
    width: "32px",
    height: "32px",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    color: isDark ? "#e1e1e1" : "#797775",
    fontSize: "14px",
  };

  // Combined className
  const tileClassName = mergeClasses(className);

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div
        className={tileClassName}
        style={{
          ...tileStyle,
          ...(isHovered ? hoverStyle : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showInfo && (
          <div style={{ ...iconStyle, left: "0px", top: "0px" }}>
            <i className="ti ti-info-circle" />
          </div>
        )}
        {showMenu && (
          <div style={{ ...iconStyle, right: "0px", top: "0px" }}>
            <i className="ti ti-dots-vertical" />
          </div>
        )}
        <div style={imageContainerStyle}>
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div style={textStyle}>{text}</div>
      </div>
    </>
  );
};

export default Tile;
