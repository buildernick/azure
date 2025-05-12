"use client";

import React from "react";
import { Button } from "@fluentui/react-components";
import { useTheme } from "@/theme/ThemeProvider";
import CardWide from "@/components/CardWide";
import styles from "./styles.module.css";

export default function CardWidePage() {
  const { themeMode, toggleTheme } = useTheme();
  const isDark = themeMode === "dark";

  const codeExample = `import CardWide from "@/components/CardWide";

// Basic usage
<CardWide
  imageUrl="/path/to/image.png"
  imageAlt="Description"
  headlineText="Set up multi-factor authentication"
  bodyText="Create a passkey, Microsoft authenticator, etc."
/>

// With all options
<CardWide
  imageUrl="/path/to/image.png"
  imageAlt="Description"
  headlineText="Custom Headline"
  bodyText="Custom body text goes here"
  showButton={true}
  showBarIcon={true}
  imagePosition="right"
  buttonText="Custom Button Text"
/>`;

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : ""}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>CardWide Component</h1>
        <Button
          appearance="subtle"
          icon={
            <i className={`ti ti-${themeMode === "light" ? "moon" : "sun"}`} />
          }
          onClick={toggleTheme}
        >
          {themeMode === "light" ? "Dark mode" : "Light mode"}
        </Button>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.description}>
          CardWide is a versatile component that displays content in a wide card
          format. It supports various configurations including image position,
          button visibility, and warning bar display.
        </p>

        <div className={styles.codeBlock}>
          <code>{codeExample}</code>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Examples</h2>

        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Default Configuration</h3>
          <CardWide
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
            imageAlt="Example"
            headlineText="Set up multi-factor authentication"
            bodyText="Create a passkey, Microsoft authenticator, etc. or use other authentication methods to secure your account"
          />
        </div>

        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Right-aligned Image</h3>
          <CardWide
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
            imageAlt="Example"
            headlineText="Custom Position Example"
            bodyText="This example shows the image positioned on the right side of the card"
            imagePosition="right"
          />
        </div>

        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Without Warning Bar</h3>
          <CardWide
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
            imageAlt="Example"
            headlineText="No Warning Bar"
            bodyText="This example shows the card without the warning bar and icon"
            showBarIcon={false}
          />
        </div>

        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Without Button</h3>
          <CardWide
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
            imageAlt="Example"
            headlineText="No Button Example"
            bodyText="This example shows the card without the action button"
            showButton={false}
          />
        </div>

        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Custom Button Text</h3>
          <CardWide
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
            imageAlt="Example"
            headlineText="Custom Button Text"
            bodyText="This example shows the card with custom button text"
            buttonText="Click Here"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Props Reference</h2>
        <div className={styles.codeBlock}>
          <code>{`interface CardWideProps {
  imagePosition?: "left" | "right";  // Default: "left"
  headlineText: string;              // Required
  bodyText: string;                  // Required
  showButton?: boolean;              // Default: true
  showBarIcon?: boolean;             // Default: true
  imageUrl: string;                  // Required
  imageAlt: string;                  // Required
  buttonText?: string;               // Default: "Create a Passkey"
  className?: string;                // Optional
}`}</code>
        </div>
      </section>
    </div>
  );
}
