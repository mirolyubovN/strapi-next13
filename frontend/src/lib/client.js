import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const URL = process.env.NODE_ENV === "production" ? process.env.API_URL : process.env.LOCAL_URL;
let client = null;

export const getClient = () => {
	if (!client || typeof window === "undefined") {
		client = new ApolloClient({
			link: new HttpLink({
				uri: URL,
			}),
			cache: new InMemoryCache(),
			connectToDevTools: true,
		});
	}

	return client;
};
