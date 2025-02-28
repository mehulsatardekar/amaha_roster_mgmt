import { FetchUsersResponse } from "@/src/types/UsersDetails";
import { FetchUsersSlotsAndEventsResponse } from "@/src/types/UsersSlotsAndEvents";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.114:3000/api" }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<FetchUsersResponse, void>({
      query: () => "fetchUsers",
    }),
    fetchUsersSlotsAndEvents: builder.query<FetchUsersSlotsAndEventsResponse, void>({
      query: () => "fetchUsersSlotsAndEvents",
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUsersSlotsAndEventsQuery } =
  apiSlice;
