import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

// import { ThemeProvider } from "@emotion/react";
// import GlobalStyles from "./styles/globalStyles";
// import { createTheme } from "./styles/utils";
// import { themeDark, themeLight } from "./styles/theme";

function App() {
  //   const { theme, toggleTheme } = useThemeApp();
  //   <ThemeProvider
  //   theme={createTheme(theme === "dark" ? themeDark : themeLight)}
  // >
  //   <GlobalStyles />
  //   <ButtonStyle variant="small">
  //     <div onClick={toggleTheme}>Change Theme</div>
  //   </ButtonStyle>
  //   </ThemeProvider>

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
