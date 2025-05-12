"use client";

import * as React from "react";
import CardSquare from "@/components/CardSquare";
import { CardWide } from "@/components";
import {
  AppItem,
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";
import { PersonCircle32Regular } from "@fluentui/react-icons";
import { Button, DrawerProps, Tooltip } from "@fluentui/react-components";
import { useTheme } from "@/theme/ThemeProvider";
import styles from "./styles.module.css";

type DrawerType = Required<DrawerProps>["type"];

// Theme toggle component for light/dark mode switching
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

export default function MyAccountPage() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [type] = React.useState<DrawerType>("inline");
  const { themeMode } = useTheme();

  const isDark = themeMode === "dark";
  const darkClass = isDark ? styles.darkContainer : "";

  return (
    <div className={`${styles.root} ${darkClass}`}>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue=""
        open={isOpen}
        type={type}
        multiple={true}
        className={styles.nav}
      >
        <NavDrawerHeader>
          <Tooltip content="Close Navigation" relationship="label">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
          </Tooltip>
        </NavDrawerHeader>

        <NavDrawerBody>
          <AppItem icon={<PersonCircle32Regular />}>Contoso HR</AppItem>
          <NavItem
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ce33bc8301fc8b1e4db7d11bbeaffb06c07605b5?placeholderIfAbsent=true"
                alt=""
              />
            }
            value="1"
          >
            Home
          </NavItem>
          <NavCategory value="2">
            <NavCategoryItem
              icon={
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ca0079d790411a410e1538294d17cfc779b616c6?placeholderIfAbsent=true"
                  alt=""
                />
              }
            >
              My Account
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="3">Profile</NavSubItem>
              <NavSubItem value="4">Settings</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavCategory value="5">
            <NavCategoryItem
              icon={
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/2226286e5ede9dd9be054c77e98175f0d08c4dfd?placeholderIfAbsent=true"
                  alt=""
                />
              }
            >
              My Apps
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="6">Installed Apps</NavSubItem>
              <NavSubItem value="7">Available Apps</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavCategory value="8">
            <NavCategoryItem
              icon={
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/d751ff669710788a9131fab49602f46b7180ecd0?placeholderIfAbsent=true"
                  alt=""
                />
              }
            >
              My Groups
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="9">Active Groups</NavSubItem>
              <NavSubItem value="10">Pending Invites</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavCategory value="11">
            <NavCategoryItem
              icon={
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/533bfffe511f2803ae2c351f22fef219a90e6be7?placeholderIfAbsent=true"
                  alt=""
                />
              }
            >
              My Access
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="12">Permissions</NavSubItem>
              <NavSubItem value="13">Security</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavDivider />
          <NavItem
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ee186d718251a3d5027878001163baa91c03986b?placeholderIfAbsent=true"
                alt=""
              />
            }
            value="14"
          >
            Give feedback
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>

      <div className={`${styles.content} ${darkClass}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Tooltip content="Toggle navigation pane" relationship="label">
              <Hamburger onClick={() => setIsOpen(!isOpen)} />
            </Tooltip>
          </div>
          <div className={styles.headerRight}>
            <ThemeToggle />
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>Welcome to Contoso, Carlos!</h1>
            <div className={styles.profileContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/61ae2431a50dc8e4444b7458be53d6430d7172b7?placeholderIfAbsent=true"
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.profileInfo}>
                <div className={styles.profileName}>
                  <div className={styles.nameHeader}>Carlos Slattery</div>
                </div>
                <div className={styles.employeeInfo}>
                  <div className={styles.infoColumn}>
                    <div className={styles.infoItem}>Marketing Manager</div>
                    <div className={styles.infoItem}>carlos@contoso.com</div>
                  </div>
                  <div className={styles.infoColumn}>
                    <div className={styles.infoItem}>+1 (415) 555-2222</div>
                    <div className={styles.infoItem}>
                      San Francisco, Building Cedar Square / 312B
                    </div>
                  </div>
                </div>
                <div className={styles.editLink}>
                  <span>Why can't I edit this?</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/12e5a3de993f0f597c5694088dc69b60a88f1332?placeholderIfAbsent=true"
                    alt="Help"
                    className={styles.helpIcon}
                  />
                </div>
              </div>
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Set up your account</h2>
            <div className={styles.wideCardGrid}>
              <CardWide
                buttonText="Create a Passkey"
                titleText="Set up multi-factor authentication"
                bodyText="Create a passkey, Microsoft authenticator, etc. or ............."
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ab9a3d3cd1d5ece12c84f5d1608dae18093a29ed?placeholderIfAbsent=true"
                imageAlt="Set up multi-factor authentication"
                variant="info"
                imagePosition="left"
                showButton={true}
              />
              <CardWide
                buttonText="Create a Passkey"
                titleText="Set up multi-factor authentication"
                bodyText="Create a passkey, Microsoft authenticator, etc. or ............."
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/5a313acb1c45f3203449f07614b2e01c5379430e?placeholderIfAbsent=true"
                imageAlt="Set up multi-factor authentication"
                variant="info"
                imagePosition="left"
                showBarIcon={true}
                showButton={true}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Secure your account</h2>
            <div className={styles.cardGrid}>
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/1d7e9753f068a1fd76eb5da012ddd2d612811808?placeholderIfAbsent=true"
                imageAlt="Verified ID"
                title="Get your Verified ID"
                description="Use Microsoft Entra credentials to manage verified IDs for easy identity"
                variant="security"
                className={styles.securityCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ca5eaa2a6835de33fa2295b998ceb7b389810cef?placeholderIfAbsent=true"
                imageAlt="BitLocker"
                title="Get your BitLocker key"
                description="BitLocker is a Windows security feature that encrypts your drives to protect your"
                variant="security"
                className={styles.securityCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/f51ba09fd3c47b55c0b0abdc6a77498426973a99?placeholderIfAbsent=true"
                imageAlt="Sign in"
                title="Change how you sign in"
                description="Update your password or set up other ways to sign in."
                variant="security"
                className={styles.securityCard}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Discover more</h2>
            <div className={styles.cardGrid}>
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/8443c64becc7eb2b4d18c86023ad9cce8724333b?placeholderIfAbsent=true"
                imageAlt="Groups"
                title="View groups"
                description="Manage your Microsoft 365 groups: join, create, and manage memberships."
                variant="discovery"
                className={styles.discoveryCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/1cc736bcd2d207b5334184d4ca3a69905ccbb5f2?placeholderIfAbsent=true"
                imageAlt="Apps"
                title="View apps"
                description="Manage your work or school apps and organize them into collections."
                variant="discovery"
                className={styles.discoveryCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/bcb4e129edf64de6ab902ee1d55c43ea2eb61e76?placeholderIfAbsent=true"
                imageAlt="Access"
                title="View access packages"
                description="Request and manage apps, groups, and resources."
                variant="discovery"
                className={styles.discoveryCard}
              />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.appsHeader}>
              <h2 className={styles.sectionTitle}>Contoso apps</h2>
              <button className={styles.manageButton}>Manage apps</button>
            </div>
            <div className={styles.appsGrid}>
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/371493c6ab83e8eaf2e291e62293fd162aef8078?placeholderIfAbsent=true"
                imageAlt="Copilot"
                title="Copilot M365"
                variant="app"
                className={styles.appCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/72fd7e8d3f5759fa1f1ac716575d590a47dfa3b4?placeholderIfAbsent=true"
                imageAlt="Adobe"
                title="Adobe Identity Manager"
                variant="app"
                className={styles.appCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/2889686ceaa928b2cdcd5ccc798cc0b8e8ee28f2?placeholderIfAbsent=true"
                imageAlt="DocuSign"
                title="DocuSign"
                variant="app"
                className={styles.appCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ed3daa32726733a10c8e39bbe1daa4cb9a92aa1e?placeholderIfAbsent=true"
                imageAlt="Dropbox"
                title="Dropbox Business"
                variant="app"
                className={styles.appCard}
              />
              <CardSquare
                imageUrl="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/a6da422f16b3919d0fa3b0541df6d7c541cdac74?placeholderIfAbsent=true"
                imageAlt="Workday"
                title="Workday"
                variant="app"
                className={styles.appCard}
              />
            </div>
          </section>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
