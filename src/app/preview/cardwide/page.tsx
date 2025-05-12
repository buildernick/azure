"use client";

import React from "react";
import { CardWide } from "@/components/CardWide";
import { useTheme } from "@/theme/ThemeProvider";
import styles from "./styles.module.css";

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <pre className={styles.codeBlock}>
      <code>{code}</code>
    </pre>
  );
};

export default function CardWidePreview() {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";

  const examples = [
    {
      title: "Default CardWide",
      component: (
        <CardWide
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="Set up multi-factor authentication"
          bodyText="Create a passkey, Microsoft authenticator, etc. or ............."
        />
      ),
      code: `<CardWide
  imageUrl="your-image-url"
  titleText="Set up multi-factor authentication"
  bodyText="Create a passkey, Microsoft authenticator, etc. or ............."
/>`,
    },
    {
      title: "CardWide without Bar Icon",
      component: (
        <CardWide
          showBarIcon={false}
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="Custom Title"
          bodyText="Custom body text goes here"
        />
      ),
      code: `<CardWide
  showBarIcon={false}
  imageUrl="your-image-url"
  titleText="Custom Title"
  bodyText="Custom body text goes here"
/>`,
    },
    {
      title: "CardWide without Button",
      component: (
        <CardWide
          showButton={false}
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="No Button Card"
          bodyText="This card variation doesn't show the button"
        />
      ),
      code: `<CardWide
  showButton={false}
  imageUrl="your-image-url"
  titleText="No Button Card"
  bodyText="This card variation doesn't show the button"
/>`,
    },
    {
      title: "CardWide with Custom Button Text",
      component: (
        <CardWide
          buttonText="Custom Action"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="Custom Button"
          bodyText="This card shows a custom button text"
        />
      ),
      code: `<CardWide
  buttonText="Custom Action"
  imageUrl="your-image-url"
  titleText="Custom Button"
  bodyText="This card shows a custom button text"
/>`,
    },
    {
      title: "CardWide with Left Image Position",
      component: (
        <CardWide
          imagePosition="left"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="Left Image Layout"
          bodyText="This card shows the image on the left side"
        />
      ),
      code: `<CardWide
  imagePosition="left"
  imageUrl="your-image-url"
  titleText="Left Image Layout"
  bodyText="This card shows the image on the left side"
/>`,
    },
    {
      title: "CardWide without Bar Icon - Right Image",
      component: (
        <CardWide
          showBarIcon={false}
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="No Bar Icon - Right Image"
          bodyText="This card has no bar icon and the image is on the right"
        />
      ),
      code: `<CardWide
  showBarIcon={false}
  imageUrl="your-image-url"
  titleText="No Bar Icon - Right Image"
  bodyText="This card has no bar icon and the image is on the right"
/>`,
    },
    {
      title: "CardWide without Bar Icon - Left Image",
      component: (
        <CardWide
          showBarIcon={false}
          imagePosition="left"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          titleText="No Bar Icon - Left Image"
          bodyText="This card has no bar icon and the image is on the left"
        />
      ),
      code: `<CardWide
  showBarIcon={false}
  imagePosition="left"
  imageUrl="your-image-url"
  titleText="No Bar Icon - Left Image"
  bodyText="This card has no bar icon and the image is on the left"
/>`,
    },
  ];

  return (
    <div
      className={`${styles.container} ${isDark ? styles.darkContainer : ""}`}
    >
      <h1 className={styles.title}>CardWide Component Preview</h1>
      <p className={styles.description}>
        The CardWide component is a versatile card component that supports
        various configurations. Below are examples of different variations of
        the component.
      </p>

      <div className={styles.examples}>
        {examples.map((example, index) => (
          <div key={index} className={styles.example}>
            <h2 className={styles.exampleTitle}>{example.title}</h2>
            <div className={styles.componentPreview}>{example.component}</div>
            <div className={styles.codeSection}>
              <h3 className={styles.codeTitle}>Implementation</h3>
              <CodeBlock code={example.code} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.propsSection}>
        <h2 className={styles.propsTitle}>Component Props</h2>
        <table className={styles.propsTable}>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>showBarIcon</td>
              <td>boolean</td>
              <td>true</td>
              <td>Shows or hides the side bar icon</td>
            </tr>
            <tr>
              <td>showButton</td>
              <td>boolean</td>
              <td>true</td>
              <td>Shows or hides the action button</td>
            </tr>
            <tr>
              <td>buttonText</td>
              <td>string</td>
              <td>"Create a Passkey"</td>
              <td>Custom text for the action button</td>
            </tr>
            <tr>
              <td>titleText</td>
              <td>string</td>
              <td>Required</td>
              <td>Main title of the card</td>
            </tr>
            <tr>
              <td>bodyText</td>
              <td>string</td>
              <td>Required</td>
              <td>Body content of the card</td>
            </tr>
            <tr>
              <td>imageUrl</td>
              <td>string</td>
              <td>Required</td>
              <td>URL for the card's image</td>
            </tr>
            <tr>
              <td>imageAlt</td>
              <td>string</td>
              <td>""</td>
              <td>Alt text for the image</td>
            </tr>
            <tr>
              <td>variant</td>
              <td>'warning' | 'info' | 'success'</td>
              <td>'warning'</td>
              <td>Visual variant of the card</td>
            </tr>
            <tr>
              <td>imagePosition</td>
              <td>'left' | 'right'</td>
              <td>'right'</td>
              <td>Position of the image relative to the content</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
