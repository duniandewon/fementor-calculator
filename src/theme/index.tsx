import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface Colors {
    900?: string;
    800?: string;
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
  }

  export interface DefaultTheme {
    borderRadius: string;
    dark: {
      bg: Colors;
      key: Colors;
      text: Colors;
    };
    light: {
      bg: Colors;
      key: Colors;
      text: Colors;
    };
    purple: {
      bg: Colors;
      key: Colors;
      text: Colors;
    };
  }
}

const theme: DefaultTheme = {
  borderRadius: "10px",
  dark: {
    bg: {
      "900": "hsl(223, 31%, 20%)",
      "800": "hsl(224, 36%, 15%)",
      "700": "hsl(222, 26%, 31%)",
    },
    key: {
      "700": "hsl(224, 28%, 35%)",
      "600": "hsl(225, 21%, 49%)",
      "500": "hsl(6, 70%, 34%)",
      "400": "hsl(6, 63%, 50%)",
      "300": "hsl(28, 16%, 65%)",
      "200": "hsl(30, 25%, 89%)",
    },
    text: {
      "800": "hsl(221, 14%, 31%)",
      "100": "hsl(0, 0%, 100%)",
    },
  },
  light: {
    bg: {
      "900": "hsl(0, 5%, 81%)",
      "800": "hsl(0, 0%, 93%)",
      "700": "hsl(0, 0%, 90%)",
    },
    key: {
      "700": "hsl(185, 58%, 25%)",
      "600": "hsl(185, 42%, 37%)",
      "500": "hsl(25, 99%, 27%)",
      "400": "hsl(25, 98%, 40%)",
      "300": "hsl(35, 11%, 61%)",
      "200": "hsl(45, 7%, 89%)",
    },
    text: {
      "800": "hsl(60, 10%, 19%)",
      "100": "hsl(0, 0%, 100%)",
    },
  },
  purple: {
    bg: {
      "900": "hsl(268, 71%, 12%)",
      "800": "hsl(268, 71%, 12%)",
      "700": "hsl(268, 75%, 9%)",
    },
    key: {
      "700": "hsl(285, 91%, 52%)",
      "600": "hsl(281, 89%, 26%)",
      "500": "hsl(177, 92%, 70%)",
      "400": "hsl(176, 100%, 44%)",
      "300": "hsl(290, 70%, 36%)",
      "200": "hsl(268, 47%, 21%)",
    },
    text: {
      "800": "hsl(52, 100%, 62%)",
      "100": "hsl(0, 0%, 100%)",
    },
  },
};

export default theme;
