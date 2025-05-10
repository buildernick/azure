import { 
  tokens,
  webLightTheme,
  webDarkTheme,
  createDarkTheme,
  createLightTheme,
  Theme,
  BrandVariants
} from '@fluentui/tokens';

// Define your brand colors
const azureBrandRamp: BrandVariants = {
  10: '#020305',
  20: '#0A1B35',
  30: '#142E59',
  40: '#1A4380',
  50: '#1F59A8',
  60: '#2370D1',
  70: '#2688FB',
  80: '#5CA5FC',
  90: '#8DC1FD',
  100: '#BBDCFE',
  110: '#E9F5FF',
  120: '#F5FAFF',
  130: '#FCFDFF',
  140: '#FFFFFF',
};

// Create custom themes based on the brand colors
export const azureLightTheme = createLightTheme(azureBrandRamp);
export const azureDarkTheme = createDarkTheme(azureBrandRamp);

// Export all design tokens for use throughout the application
export const designTokens = {
  // Fluent UI built-in tokens
  colors: tokens.colorPalette,
  fontSizes: tokens.fontSizeBase,
  fontWeights: tokens.fontWeightRegular,
  lineHeights: tokens.lineHeightBase,
  spacing: tokens.spacingHorizontalS,
  borderRadius: tokens.borderRadiusMedium,
  
  // Theme-specific tokens (will change based on current theme)
  light: azureLightTheme,
  dark: azureDarkTheme,
  
  // Default theme - can be swapped between light and dark
  current: azureLightTheme
};

// Helper function to access tokens, making sure to always use tokens instead of raw values
export const getToken = (tokenPath: string) => {
  const parts = tokenPath.split('.');
  return parts.reduce((obj, part) => obj && obj[part], designTokens);
};

export default designTokens;
