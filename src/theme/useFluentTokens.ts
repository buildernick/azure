import { tokens } from '@fluentui/tokens';
// Use this import everywhere
import { useTheme, FluentThemeProvider } from '@/theme/ThemeProvider';

// This hook provides access to all design tokens and current theme
export const useFluentTokens = () => {
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  
  return {
    colors: {
      brand: {
        primary: tokens.colorBrandForeground1,
        secondary: tokens.colorBrandForeground2,
      },
      background: {
        default: tokens.colorNeutralBackground1,
        subtle: tokens.colorNeutralBackground2,
        emphasized: tokens.colorNeutralBackground3,
      },
      text: {
        primary: tokens.colorNeutralForeground1,
        secondary: tokens.colorNeutralForeground2,
        disabled: tokens.colorNeutralForegroundDisabled,
      },
      status: {
        success: tokens.colorStatusSuccess,
        warning: tokens.colorStatusWarning,
        danger: tokens.colorStatusDanger,
        info: tokens.colorStatusInfo,
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
    isDarkMode,
  };
};

export default useFluentTokens;
