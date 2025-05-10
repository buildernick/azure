import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import {
  Nav,
  NavItem,
  NavCategoryItem,
  NavDivider,
} from "@fluentui/react-nav-preview";
import { ChildrenNode } from "@builder.io/dev-tools/figma";

// ❖ Nav
interface FigmaNavProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Nav",
  componentKey: "1d223c5258b6e962ec0480beac8c3704f41bd79a",
  mapper(figma: BaseFigmaProps) {
      return <Nav>{figma.$children}</Nav>;
  },
});
