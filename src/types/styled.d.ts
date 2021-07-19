// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Black
      darkGunmetalBlack: string;

      // Blue
      aliceBlue: string;
      azureBlue;
      secondary: string;

      // Gray
      background: string;
      silverSandGray: string;

      // Orange
      primary: string;

      // Red
      pastelRed: string;

      // White
      ghost: string;
      transparent: string;
      white: string;

      // Yellow
      stilDeGrainYellow: string;
    };

    fonts: {
      fallback: string;
      roboto: string;
      robotoMono: string;
      catamaran: string;
    };

    gradients: {
      primaryGradient: FlattenSimpleInterpolation<ThemeProps<DefaultTheme>>;
      secondaryGradient: FlattenSimpleInterpolation<ThemeProps<DefaultTheme>>;
    };

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>;
      upToSmall: ThemedCssFunction<DefaultTheme>;
      upToMedium: ThemedCssFunction<DefaultTheme>;
      upToLarge: ThemedCssFunction<DefaultTheme>;
    };

    snippets: {
      borderAliceBlue: FlattenSimpleInterpolation<ThemeProps<DefaultTheme>>;
      flexColumnNoWrap: FlattenSimpleInterpolation<ThemeProps<DefaultTheme>>;
      flexRowNoWrap: FlattenSimpleInterpolation<ThemeProps<DefaultTheme>>;
    };
  }
}
