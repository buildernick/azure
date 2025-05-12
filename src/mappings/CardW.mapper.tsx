import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { CardWide } from "@/components/CardWide";

// ❖ CardW
interface FigmaCardWProps extends BaseFigmaProps {
  "Show .Bar+Icon"?: boolean;
  Title?: string;
  Body?: string;
  "Show Button"?: boolean;
  "Button Text"?: string;
  "Icon Instance"?: ChildrenNode;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "CardW",
  componentKey: "654bc0fe8013ec5cb06c0879c83fead1f33f428f",
  mapper(figma: FigmaCardWProps) {
    // Extract image URL from Icon Instance if present
    const iconNode = figma["Icon Instance"];
    const imageUrl = (iconNode as any)?.$imageUrl ?? "";

    // Map the component
    return (
      <CardWide
        showBarIcon={figma["Show .Bar+Icon"] ?? false}
        showButton={figma["Show Button"] ?? false}
        buttonText={figma["Button Text"] ?? ""}
        titleText={figma["Title"] ?? ""}
        bodyText={figma["Body"] ?? ""}
        imageUrl={imageUrl}
        imageAlt={figma["Title"] ?? "Card image"} // Using title as alt text
        variant="info" // Default variant
        imagePosition="left" // Default position
      />
    );
  },
});
