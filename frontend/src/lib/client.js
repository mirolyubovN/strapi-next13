import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://127.0.0.1:1337/graphql",
      }),
      cache: new InMemoryCache(),
	  connectToDevTools: true,
    });
  }

  return client;
};
