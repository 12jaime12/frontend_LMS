import { Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          '*': {
            fontFamily: "'Prompt', sans-serif;",
            boxSizing: 'border-box',
            padding: 0,
            margin: 0,
          },
          'html,body': {
            height: '100vh',
            padding: 0,
            margin: 0,
            backgroundColor: theme.palette.background.main,
            color: theme.palette.color.main,
          },

          // ".prueba": {
          //   background: "black",
          // },
          '::-webkit-scrollbar': {
            width: theme.spacing(0.75),
            background: theme.palette.color.main,
          },
          '::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px ${theme.palette.color.main}`,
          },
          '::-webkit-scrollbar-thumb': {
            width: theme.spacing(0.75),
            background: theme.palette.button.main,
            borderRadius: theme.spacing(0.5),
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Regular',
            src: `url(${theme.typography.fonts.regular}) format("truetype")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Italic',
            src: `url(${theme.typography.fonts.italic}) format("truetype")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Bold',
            src: `url(${theme.typography.fonts.bold}) format("truetype")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'SemiBold',
            src: `url(${theme.typography.fonts.semibold}) format("truetype")`,
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
