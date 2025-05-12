import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import CardWide from "@/components/CardWide";

// ❖ CardWide
interface FigmaCardWideProps extends BaseFigmaProps {
  "Headline Text"?: string;
  "Body Text"?: string;
  "Show Button"?: boolean;
  "Show Bar + Icon"?: boolean;
  Icon?: ChildrenNode;
  "Image Position"?: "Right" | "Left";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "CardWide",
  componentKey: "43b34aeaca1219ce70c229782581cfc4cdce384e",
  mapper(figma: FigmaCardWideProps) {
    // Extract button text from nested structure
    const buttonText = figma
      .$findOneByName(/^Button/)
      ?.$findOneByName(/^Text wrapper/)
      ?.$findOneByName(/^Text/)?.$textContent;

    // Convert image position to lowercase for proper prop mapping
    const imagePosition = figma["Image Position"]?.toLowerCase() as
      | "left"
      | "right";

    return (
      <CardWide
      headlineText={figma["Headline Text"] ?? ""}
      bodyText={figma["Body Text"] ?? ""}
      showButton={figma["Show Button"] ?? false}
      showBarIcon={figma["Show Bar + Icon"] ?? false}
      imagePosition={imagePosition}
      imageUrl={figma.$findOneByName("ContentLayout")?.$imageUrl} // Default empty as not provided in Figma structure
      imageAlt={figma["Headline Text"] ?? ""} // Default empty as not provided in Figma structure
        buttonText={buttonText}
      />
    );
  },
});
