import { createTheme } from "@mui/material/styles";

interface ISubColor {
  light: string;
  main: string;
  dark: string;
}
interface ISubColorText {
  primary: string;
  secondary: string;
  disabled: string;
}
interface IColors {
  primary: ISubColor;
  secondary: ISubColor;
  info: ISubColor;
  success: ISubColor;
  warning: ISubColor;
  error: ISubColor;
  text: ISubColorText;
}
const COLORS: IColors = {
  primary: {
    main: "#00AB55",
    light: "#5BE584",
    dark: "#007B55",
  },
  secondary: {
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",

    // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#ffcc00',
  },
  info: {
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
  },
  success: {
    light: "#86E8AB",
    main: "#36B37E",
    dark: "#1B806A",
  },
  warning: {
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
  },
  error: {
    light: "#FFAC82",
    main: "#dc3545",
    dark: "#B71D18",
  },
  text: {
    primary: "#212B36",
    secondary: "#637381",
    disabled: "#919EAB",
  },
};

const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: "6px 0px 6px 8px",
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          overflow:"hidden",
          '& .MuiFilledInput-root': {
            color: '#000',
            border:"0",

          },
          '& .MuiInputLabel-filled': {
            color: '#2e2e2e',
            '&.Mui-focused': {
              color: 'secondary.main',
            },
          }
          // label: {
          //   top: "50%",
          //   transform: "translateY(-50%)",
          //   insetInlineStart: "0.5rem",
          //   "&.Mui-focused": {
          //     backgroundColor: "yellow",
          //     transform: "translateY(-50%)",

          //   },
          // },
          // input: {
          //   padding: "0.5rem",
          // },
        },
      },
    },
  },

  palette: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    info: COLORS.info,
    success: COLORS.success,
    warning: COLORS.warning,
    error: COLORS.error,
    text: COLORS.text,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export { COLORS, theme };
