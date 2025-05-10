import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import Tile from "@/components/Tile";

// ❖ Tile Builder
interface FigmaTileProps extends BaseFigmaProps {
  showinfo?: boolean;
  showMenu?: boolean;
  title?: string;
  image_url?: string;
  imageAlt?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Tile",
  componentKey: "76c1218eef81a9fc229c185fecd04a420f52b4c9",
  mapper(figma: FigmaTileProps) {
    const nameNode = figma.$findOneByName("name");
    const imageFrame = figma.$findOneByName("image_url");

    return (
      <Tile
        imageUrl={imageFrame?.$imageUrl ?? ""}
        imageAlt={nameNode?.$textContent ?? "Tile image"}
        text={nameNode?.$textContent ?? ""}
        showMenu={figma.showMenu ?? false}
        showInfo={figma.showinfo ?? false}
      />
    );
  },
});
