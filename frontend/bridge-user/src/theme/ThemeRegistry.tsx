"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
import { lightTheme } from "./theme";
import { AtomDarkMode, useRecoilSSR } from "@/recoil/atoms";
import { useRecoilState } from "recoil";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useRecoilSSR(AtomDarkMode, true);
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={darkMode ? theme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
