import { env } from "src/app/legacy/env.tool";
import { token } from "src/app/legacy/token.tool";
import { createClient } from "../../../../graphql/client";

export const graphqlEndpoint = env("VITE_GRAPHQL_ENDPOINT");

export const client = createClient({
  url: graphqlEndpoint,
  batch: true,
  headers: () => ({ authorization: token.asHeader() }),
});
