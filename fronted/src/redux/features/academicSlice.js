import { indexSlice } from "./indexSlice";
export const academicApi = indexSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvent: builder.query({
      query: () => ({
        url: "/api/academic/event ",
        method: "GET",
      }),
      providesTags: ["academic"],
    }),
  }),
});
export const { useGetEventQuery } = academicApi;
