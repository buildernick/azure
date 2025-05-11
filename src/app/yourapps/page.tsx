"use client";

import * as React from "react";
import Tile from "@/components/Tile";
import { Button } from "@fluentui/react-components";
import { useTheme, FluentThemeProvider } from '@/theme/ThemeProvider';
import styles from "./styles.module.css";

// Separate ThemeToggle component to access the theme context
const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Button
      appearance="subtle"
      icon={<i className={`ti ti-${themeMode === "light" ? "moon" : "sun"}`} />}
      onClick={toggleTheme}
      className={styles.themeToggle}
    >
      {themeMode === "light" ? "Dark mode" : "Light mode"}
    </Button>
  );
};

// Main content component to access the theme
const MainContent = () => {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";
  const darkClass = isDark ? styles.darkContainer : "";

  return (
    <div className={`${styles.root} ${darkClass}`}>
      <div className={styles.header}>
        <div className={styles.headerLeftSection}>
          <div className={styles.headerLeftGroup}>
            <div className={styles.headerIcon}>
              <span className={styles.iconFabric} />
            </div>
            <div className={styles.logoWrapper}>
              <svg
                width="108"
                height="24"
                viewBox="0 0 108 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.microsoftLogo}
              >
                <path d="M12 12.5H23V23.5H12V12.5Z" fill="#FFB900" />
                <path d="M0 12.5H11V23.5H0V12.5Z" fill="#00A4EF" />
                <path d="M12 0.5H23V11.5H12V0.5Z" fill="#7FBA00" />
                <path d="M0 0.5H11V11.5H0V0.5Z" fill="#F25022" />
              </svg>
            </div>
            <div className={styles.headerDivider}>
              <div className={styles.dividerVertical} />
              <div className={styles.headerTitle}>
                <div className={styles.titleText}>Your Apps</div>
                <div className={styles.iconFabricSmall} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon} />
            <span className={styles.searchText}>Search apps</span>
          </div>
        </div>
        <div className={styles.headerRightSection}>
          <ThemeToggle />
          <div className={styles.headerIcon}>
            <span className={styles.iconFabric} />
          </div>
          <div className={styles.headerIcon}>
            <span className={styles.iconFabric} />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/cfc3b72d8ac723a68719a3aa4d8c675a02faf42c?placeholderIfAbsent=true"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </div>

      <div className={styles.navigationSection}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <div className={styles.activeTab}>
              <span className={styles.tabText}>Contoso</span>
              <div className={styles.activeIndicator} />
            </div>
            <div className={styles.tab}>
              <span className={styles.tabText}>Design</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabText}>Apps</span>
            </div>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.actionButton}>
            <span className={styles.buttonIcon} />
            <span className={styles.buttonText}>Add apps</span>
          </button>
          <button className={styles.actionButton}>
            <span className={styles.buttonIconBlue} />
            <span className={styles.buttonText}>Create collection</span>
          </button>
          <button className={styles.actionButton}>
            <span className={styles.buttonIcon} />
            <span className={styles.buttonText}>Customize view</span>
          </button>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <div className={styles.drawerTitle}>Productivity</div>
            <button className={styles.settingsButton}>
              <span className={styles.settingsIcon} />
              <span className={styles.settingsText}>Settings</span>
            </button>
            <div className={styles.divider} />
          </div>
          <div className={styles.drawerContent}>
            <div className={styles.tileGrid}>
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/bc24f99bda11b9a51c1af9ac9c4ae6b5d8a750f8?placeholderIfAbsent=true"
                imageAlt="Outlook"
                text="Outlook"
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/1ff0e53d3f1e92d8bc862a98d002a5f94a277103?placeholderIfAbsent=true"
                imageAlt="Teams"
                text="Teams"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/501c14b555e97171336c862709079e3ed8b65109?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/35506f950f4fcce946dd354fdec496ab842a3f61?placeholderIfAbsent=true"
                imageAlt="Atlassian Cloud"
                text="Atlassian Cloud"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/e6abd5537af57214fdb2d049bb7cd8539a0dff54?placeholderIfAbsent=true"
                imageAlt="SalesForce"
                text="SalesForce"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/c92bd1f790b0715fcd338c400dee38583f314c09?placeholderIfAbsent=true"
                imageAlt="Docusign"
                text="Docusign"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/44f34e51eae7f0af0c727c1fe45300c7f6dc3981?placeholderIfAbsent=true"
                imageAlt="Dropbox Business"
                text="Dropbox Business"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/20046417af7874cff9202a41265f8c171f80ac88?placeholderIfAbsent=true"
                imageAlt="Google Cloud"
                text="Google Cloud"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/92ececa4068644fd548adce859423f72ec5848e9?placeholderIfAbsent=true"
                imageAlt="Workday"
                text="Workday"
                showMenu
                showInfo
              />
            </div>
          </div>
        </div>

        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <div className={styles.drawerTitle}>Design and user experience</div>
            <button className={styles.settingsButton}>
              <span className={styles.settingsIcon} />
              <span className={styles.settingsText}>Settings</span>
            </button>
            <div className={styles.divider} />
          </div>
          <div className={styles.drawerContent}>
            <div className={styles.tileGrid}>
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/6a196e0a6c0c331c314273317119bb70e7c2eff0?placeholderIfAbsent=true"
                imageAlt="Figma"
                text="Figma"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/b44422b9b98e257903bf66006cd05217d9566239?placeholderIfAbsent=true"
                imageAlt="Adobe XD"
                text="Adobe XD"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/86fac6fa069323b0e462e9d499952bdef41c0a10?placeholderIfAbsent=true"
                imageAlt="Sketch"
                text="Sketch"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/c96ee85f8732b01659a5fa51f48645f7be8ebbec?placeholderIfAbsent=true"
                imageAlt="InVision"
                text="InVision"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/bd82cfb8dce35549f3454d15ea8401e095592869?placeholderIfAbsent=true"
                imageAlt="Zeplin"
                text="Zeplin"
                showMenu
                showInfo
              />
            </div>
          </div>
        </div>

        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <div className={styles.drawerTitle}>App library</div>
            <button className={styles.settingsButton}>
              <span className={styles.settingsIcon} />
              <span className={styles.settingsText}>Settings</span>
            </button>
            <div className={styles.divider} />
          </div>
          <div className={styles.drawerContent}>
            <div className={styles.tileGrid}>
              <Tile
                imageUrl="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                imageAlt=" "
                text=" "
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/6435efcdae4c7a10d1d53faf124ed34832eeeff1?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ab839e9daa4bfd004b7f480c4c13425607464211?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/4d60e12ef214b692a9bdfe08537560bdf843ccae?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/27076ac9b393ca4da9502d3cedb90bdbbe06bf65?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/5d55310e76c642b7d956ea1e206be36daf518a8f?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/5948939b7dd24c468983c8876ec222f75f562c9b?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/44f34e51eae7f0af0c727c1fe45300c7f6dc3981?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/95f970929ac8a1a09caaaeedbe6cee4d42089b00?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/294e91414f6e94e88fda0a57e80da0042d43173d?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/3ad5d133ed663d77a24331337d049ebd9fe8b8e3?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ff2e3579c5d6f4c2015486ee4b0518659254ae5c?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/23c1700eb9a301add89a4a1fb78ff197bf560b71?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/3d7e9cd790ebb16874c367a0672f421ffdd2a3c6?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
              <Tile
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/dfc89189c8fb4319d632e3f1efb0e026925245d7?placeholderIfAbsent=true"
                imageAlt="Adobe Identity Manager"
                text="Adobe Identity Manager"
                showMenu
                showInfo
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function YourApps() {
  return <MainContent />;
}
