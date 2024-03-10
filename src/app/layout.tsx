import type { Metadata } from "next";

import classNames from "classnames";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

import {
  Header,
  Container,
  Footer,
  PageHeader,
  ProjectMainMessage,
} from "@/components";

export const metadata: Metadata = {
  title: "ReactifyWP - Your Wordpress Theme",
  description: "Generated by create next app and smart hands",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const siteUnderMaintance: Boolean = false;

  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "mx-auto flex max-w-wrapper-page-sz flex-col items-center justify-start p-2xl",
        )}
      >
        <Header />
        <main className="flex min-h-screen w-full flex-col items-center justify-start">
          <Container width="lg">
            <PageHeader
              title="Do you like this Stories ?"
              text="Take a moment to explore our collection of posts and discover the
          simplicity within."
            />
            {children}
          </Container>
        </main>
        <Footer />
        {siteUnderMaintance && <ProjectMainMessage />}
      </body>
    </html>
  );
};

export default RootLayout;
