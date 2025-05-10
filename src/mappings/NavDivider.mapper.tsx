import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { NavDivider } from "@fluentui/react-nav-preview";

// ❖ Nav Divider
interface FigmaNavDividerProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Nav Divider",
  componentKey: "411b96a6b8d7e18f56e67426c99cb4a05480b59c",
  mapper(figma: FigmaNavDividerProps) {
    return (
      <NavDivider
        appearance="default"
        alignContent="center"
        inset={false}
        vertical={false}
      />
    );
  },
});
