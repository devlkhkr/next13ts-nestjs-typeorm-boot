import ThemeRegistry from "@/theme/ThemeRegistry";
import CssBaseline from "@mui/material/CssBaseline";

import MainGrid from "@/components/templates/MainGrid";
import AuthSession from "./auth";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import RecoilContext from "./recoil";
import ProgressProvider from "./progress";
import SnackBarContext from "./snackbar";
import Modal from "@/components/templates/Modal";

export const metadata = {
  title: "bridge",
  description: "Event Management System for Street Dance Scene",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <AuthSession session={session}>
          <RecoilContext>
            <ThemeRegistry>
              <CssBaseline />
              <ProgressProvider>
                <SnackBarContext>
                  <MainGrid>{children}</MainGrid>
                  <Modal />
                </SnackBarContext>
              </ProgressProvider>
            </ThemeRegistry>
          </RecoilContext>
        </AuthSession>
      </body>
    </html>
  );
}
