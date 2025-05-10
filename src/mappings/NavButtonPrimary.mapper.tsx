import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { NavCategoryItem } from "@fluentui/react-nav-preview";

// ❖ Nav Button-Primary
interface FigmaNavButtonPrimaryProps extends BaseFigmaProps {
  Icon?: ChildrenNode;
  Submenu?: "Collapsed" | "Expanded" | "None";
  State?: "Rest" | "Active" | "Hover" | "Focus";
  Collapsed?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Nav Button-Primary",
  componentKey: "ff5e0b9f3d8e8f8513cc2216b08e65b15345931f",
  mapper(figma: FigmaNavButtonPrimaryProps) {
    // Determine if we should show expand icon based on Submenu state
    const showExpandIcon = figma.Submenu !== "None";

    // Handle icon prop if provided
    const iconProp = figma.Icon ? { icon: figma.Icon } : {};

    // Handle expand icon based on submenu state and collapsed state
    const expandIconProp = showExpandIcon
      ? {
          expandIcon: <span>{figma.Collapsed === "True" ? "▸" : "▾"}</span>,
        }
      : {};

    return (
      <NavCategoryItem {...iconProp} {...expandIconProp}>
        {/* {figma.$children} */}
        {figma.$findOneByName("String-button")?.$textContent}
      </NavCategoryItem>
    );
  },
});
