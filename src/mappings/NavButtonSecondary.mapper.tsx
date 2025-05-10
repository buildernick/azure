import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { NavItem } from "@fluentui/react-nav-preview";

// ❖ Nav Button-Secondary
interface FigmaNavButtonSecondaryProps extends BaseFigmaProps {
  State?: "Rest" | "Active" | "Hover" | "Focus";
  "Item Indent"?: "True" | "False";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Nav Button-Secondary",
  componentKey: "8749f5ad4d7c0ac0372a1f35127fabd17e37f6b6",
  mapper(figma: FigmaNavButtonSecondaryProps) {
    // Extract text content for value prop
    const value = figma.$textContent ?? "";

    // Check for icon
    const hasIcon = figma.$findOneByName(/icon/i);

    return (
      <NavItem value={value} icon={hasIcon ? {} : undefined}>
        {figma.$children}
      </NavItem>
    );
  },
});
