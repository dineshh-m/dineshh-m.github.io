import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import styles from "./layout.module.css";
import SocialLinks from "./components/social-links";
import ThemeProvider from "./theme-provider";
// import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from "./components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinesh M",
  description: "A website by Dinesh M",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>
              <div className={styles.header}>
                <div className={styles.heading}>
                  <h1>Dinesh M</h1>
                  <SocialLinks />
                </div>
              </div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
