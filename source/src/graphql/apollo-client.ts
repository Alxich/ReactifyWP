import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, // HTTP URL for queries and mutations
  // credentials: "include", // Include cookies with requests for authentication
  // fetchOptions: {
  //   mode: "no-cors",
  // },
});

const link = httpLink;

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
