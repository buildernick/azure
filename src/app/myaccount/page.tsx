"use client";

import * as React from "react";
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
import { DrawerProps, Tooltip } from "@fluentui/react-components";
import styles from "./styles.module.css";

type DrawerType = Required<DrawerProps>["type"];

export default function MyAccountPage() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [type] = React.useState<DrawerType>("inline");

  return (
    <div className={styles.root}>
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

      <div className={styles.content}>
        <div className={styles.header}>
          <Tooltip content="Toggle navigation pane" relationship="label">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
          </Tooltip>
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
            <div className={styles.cardGrid}>
              <div className={styles.setupCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/c95e44fab5a417d6436335305c98bd048da991de?placeholderIfAbsent=true"
                  alt="Setup"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.setupCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/5a313acb1c45f3203449f07614b2e01c5379430e?placeholderIfAbsent=true"
                  alt="Profile"
                  className={styles.cardImage}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Secure your account</h2>
            <div className={styles.cardGrid}>
              <div className={styles.securityCard}>
                <div className={styles.cardContent}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/1d7e9753f068a1fd76eb5da012ddd2d612811808?placeholderIfAbsent=true"
                    alt="Verified ID"
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>Get your Verified ID</h3>
                  <p className={styles.cardDescription}>
                    Use Microsoft Entra credentials to manage verified IDs for
                    easy identity
                  </p>
                </div>
              </div>
              <div className={styles.securityCard}>
                <div className={styles.cardContent}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ca5eaa2a6835de33fa2295b998ceb7b389810cef?placeholderIfAbsent=true"
                    alt="BitLocker"
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>Get your BitLocker key</h3>
                  <p className={styles.cardDescription}>
                    BitLocker is a Windows security feature that encrypts your
                    drives to protect your
                  </p>
                </div>
              </div>
              <div className={styles.securityCard}>
                <div className={styles.cardContent}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/f51ba09fd3c47b55c0b0abdc6a77498426973a99?placeholderIfAbsent=true"
                    alt="Sign in"
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>Change how you sign in</h3>
                  <p className={styles.cardDescription}>
                    Update your password or set up other ways to sign in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Discover more</h2>
            <div className={styles.cardGrid}>
              <div className={styles.discoveryCard}>
                <div className={styles.cardContent}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/8443c64becc7eb2b4d18c86023ad9cce8724333b?placeholderIfAbsent=true"
                    alt="Groups"
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>View groups</h3>
                  <p className={styles.cardDescription}>
                    Manage your Microsoft 365 groups: join, create, and manage
                    memberships.
                  </p>
                </div>
              </div>
              <div className={styles.discoveryCard}>
                <div className={styles.cardContent}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/1cc736bcd2d207b5334184d4ca3a69905ccbb5f2?placeholderIfAbsent=true"
                    alt="Apps"
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>View apps</h3>
                  <p className={styles.cardDescription}>
                    Manage your work or school apps and organize them into
                    collections.
                  </p>
                </div>
              </div>
              <div className={styles.discoveryCard}>
                <div className={styles.cardContent}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/bcb4e129edf64de6ab902ee1d55c43ea2eb61e76?placeholderIfAbsent=true"
                    alt="Access"
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>View access packages</h3>
                  <p className={styles.cardDescription}>
                    Request and manage apps, groups, and resources.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.appsHeader}>
              <h2 className={styles.sectionTitle}>Contoso apps</h2>
              <button className={styles.manageButton}>Manage apps</button>
            </div>
            <div className={styles.appsGrid}>
              <div className={styles.appCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/371493c6ab83e8eaf2e291e62293fd162aef8078?placeholderIfAbsent=true"
                  alt="Copilot"
                  className={styles.appIcon}
                />
                <span className={styles.appName}>Copilot M365</span>
              </div>
              <div className={styles.appCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/72fd7e8d3f5759fa1f1ac716575d590a47dfa3b4?placeholderIfAbsent=true"
                  alt="Adobe"
                  className={styles.appIcon}
                />
                <span className={styles.appName}>Adobe Identity Manager</span>
              </div>
              <div className={styles.appCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/2889686ceaa928b2cdcd5ccc798cc0b8e8ee28f2?placeholderIfAbsent=true"
                  alt="DocuSign"
                  className={styles.appIcon}
                />
                <span className={styles.appName}>DocuSign</span>
              </div>
              <div className={styles.appCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/ed3daa32726733a10c8e39bbe1daa4cb9a92aa1e?placeholderIfAbsent=true"
                  alt="Dropbox"
                  className={styles.appIcon}
                />
                <span className={styles.appName}>Dropbox Business</span>
              </div>
              <div className={styles.appCard}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/375626aef9734fa5a388227cc2b6eab1/a6da422f16b3919d0fa3b0541df6d7c541cdac74?placeholderIfAbsent=true"
                  alt="Workday"
                  className={styles.appIcon}
                />
                <span className={styles.appName}>Workday</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
