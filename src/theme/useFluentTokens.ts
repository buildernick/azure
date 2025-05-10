import { tokens } from '@fluentui/tokens';
import { useTheme } from './ThemeProvider';
import designTokens from './designTokens';

// This hook provides access to all design tokens and current theme
export const useFluentTokens = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = isDarkMode ? designTokens.dark : designTokens.light;
  
  return {
    colors: {
      brand: {
        primary: currentTheme.colorBrandForeground1,
        secondary: currentTheme.colorBrandForeground2,
      },
      background: {
        default: currentTheme.colorNeutralBackground1,
        subtle: currentTheme.colorNeutralBackground2,
        emphasized: currentTheme.colorNeutralBackground3,
      },
      text: {
        primary: currentTheme.colorNeutralForeground1,
        secondary: currentTheme.colorNeutralForeground2,
        disabled: currentTheme.colorNeutralForegroundDisabled,
      },
      status: {
        success: currentTheme.colorStatusSuccess,
        warning: currentTheme.colorStatusWarning,
        danger: currentTheme.colorStatusDanger,
        info: currentTheme.colorStatusInfo,
      },
    },
    spacing: {
      xs: tokens.spacingHorizontalXS,
      s: tokens.spacingHorizontalS,
      m: tokens.spacingHorizontalM,
      l: tokens.spacingHorizontalL,
      xl: tokens.spacingHorizontalXL,
    },
    fonts: {
      size: {
        xs: tokens.fontSizeBase200,
        s: tokens.fontSizeBase300,
        m: tokens.fontSizeBase400,
        l: tokens.fontSizeBase500,
        xl: tokens.fontSizeBase600,
      },
      weight: {
        regular: tokens.fontWeightRegular,
        semibold: tokens.fontWeightSemibold,
        bold: tokens.fontWeightBold,
      },
      family: tokens.fontFamilyBase,
    },
    borderRadius: {
      s: tokens.borderRadiusSmall,
      m: tokens.borderRadiusMedium,
      l: tokens.borderRadiusLarge,
      circular: tokens.borderRadiusCircular,
    },
    animation: {
      duration: {
        fast: tokens.durationFaster,
        normal: tokens.durationNormal,
        slow: tokens.durationSlower,
      },
      curve: {
        ease: tokens.curveEasyEase,
        accelerate: tokens.curveAccelerate,
        decelerate: tokens.curveDecelerate,
      },
    },
  };
};

export default useFluentTokens;
