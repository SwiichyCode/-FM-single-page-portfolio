import { mixins } from "@/styles/mixins";
import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeLayoutProps {
  children: React.ReactNode;
}

const theme = {
  mixins: mixins,
};

export const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
