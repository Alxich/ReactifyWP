import "./globals.css";

import { FC } from "react";
import type { AppProps } from "next/app";
import classNames from "classnames";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import {
  Container,
  Footer,
  Header,
  PageHeader,
  ProjectMainMessage,
  ThemeSwither,
} from "@/components";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apollo-client";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const siteUnderMaintance: Boolean = false;

  return (
    <ApolloProvider client={client}>
      <Container
        width="full"
        classNames={classNames(
          inter.className,
          "flex-cstart flex-dcol mx-auto max-w-wrapper-page-sz overflow-x-hidden p-2xl tablet:p-md phone-portrait:p-xs",
        )}
      >
        <Header />
        <main className="flex-cstart flex-dcol min-h-screen w-full">
          <Container width="lg">
            <PageHeader
              title="Do you like this Stories ?"
              text="Take a moment to explore our collection of posts and discover the
          simplicity within."
            />
            <Component {...pageProps} />
          </Container>
        </main>
        <Footer />
        {siteUnderMaintance && <ProjectMainMessage />}
        <ThemeSwither />
      </Container>
    </ApolloProvider>
  );
};

export default App;
