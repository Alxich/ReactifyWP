import "./globals.css";

import {
  FC,
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

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

export const PageContext = createContext<{
  pageId?: string;
  pageSlug?: string;
  setPageId?: Dispatch<SetStateAction<string | undefined>>;
  setPageSlug?: Dispatch<SetStateAction<string | undefined>>;
}>({});

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [pageId, setPageId] = useState<string | undefined>();
  const [pageSlug, setPageSlug] = useState<string | undefined>();
  const siteUnderMaintance: Boolean = false;

  return (
    <ApolloProvider client={client}>
      <PageContext.Provider
        value={{ pageId, pageSlug, setPageId, setPageSlug }}
      >
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
      </PageContext.Provider>
    </ApolloProvider>
  );
};

export default App;
