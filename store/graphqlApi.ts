import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient("/api/graphql");

export const api = createApi({
  reducerPath: "graphqlApi",
  baseQuery: graphqlRequestBaseQuery({ client: graphqlClient }),
  endpoints: () => ({}),
  refetchOnFocus:true,
  refetchOnMountOrArgChange:true,
  refetchOnReconnect:true,
});