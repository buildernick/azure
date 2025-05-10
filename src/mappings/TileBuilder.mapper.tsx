import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import Tile from "@/components/Tile";

// ❖ Tile Builder
interface FigmaTileBuilderProps extends BaseFigmaProps {
  ShowInfo?: boolean;
  ShowMenu?: boolean;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Tile Builder",
  componentKey: "f76d592df97de62ee2760d0f2274ffdb5cdf4e65",
  mapper(figma: FigmaTileBuilderProps) {
    const nameNode = figma.$findOneByName("name");
    const imageFrame = figma.$findOneByName("image_url");

    return (
      <Tile
        imageUrl={imageFrame?.$imageUrl ?? ""}
        imageAlt={nameNode?.$textContent ?? "Tile image"}
        text={nameNode?.$textContent ?? ""}
        showMenuIcon={figma.ShowMenu ?? false}
        showInfoIcon={figma.ShowInfo ?? false}
      />
    );
  },
});
