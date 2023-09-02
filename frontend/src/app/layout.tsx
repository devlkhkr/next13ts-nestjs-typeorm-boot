import ThemeRegistry from "@/theme/ThemeRegistry";
import CssBaseline from "@mui/material/CssBaseline";

import MainGrid from "@/components/templates/MainGrid";

export const metadata = {
  title: "bridge",
  description: "Event Management System for Street Dance Scene",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <CssBaseline />
          <MainGrid>{children}</MainGrid>
        </ThemeRegistry>
      </body>
    </html>
  );
}
